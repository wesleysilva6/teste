import { AuthError, PublicError, requireAdmin } from "./_shared.js";

const allowedStatuses = new Set(["active", "invalid", "timeout", "suspicious_redirect", "error"]);

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Metodo nao permitido." });

  try {
    const { supabase, user } = await requireAdmin(req);
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const productId = String(body.product_id || "");
    const url = String(body.url || "");
    if (!productId) throw new PublicError("Produto nao informado.");
    const parsed = parseSafeUrl(url);

    const checkedAt = new Date().toISOString();
    const result = await inspectUrl(parsed);
    const normalizedStatus = allowedStatuses.has(result.status) ? result.status : "error";

    await supabase.from("affiliate_link_checks").insert({
      product_id: productId,
      url: parsed.toString(),
      final_url: result.final_url,
      status_code: result.status_code,
      status: normalizedStatus,
      error: result.error,
      checked_at: checkedAt
    });

    if (normalizedStatus !== "active") {
      await supabase.from("admin_notifications").insert({
        title: "Link afiliado com problema",
        message: `O link do produto retornou status ${normalizedStatus}.`,
        severity: normalizedStatus === "invalid" ? "critical" : "warning",
        metadata: {
          product_id: productId,
          url: parsed.toString(),
          final_url: result.final_url,
          status_code: result.status_code,
          checked_by: user.id
        }
      });
    }

    return res.status(200).json({ ok: true, checked_at: checkedAt, ...result, status: normalizedStatus });
  } catch (error) {
    if (error instanceof AuthError) return res.status(error.status || 401).json({ ok: false, error: error.message });
    console.error("check-link error", { message: error?.message, name: error?.name });
    return res.status(error instanceof PublicError ? 400 : 500).json({ ok: false, error: error instanceof PublicError ? error.message : "Falha interna no verificador de links." });
  }
}

function parseSafeUrl(value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new PublicError("URL afiliada invalida.");
  }
  if (!["http:", "https:"].includes(parsed.protocol)) throw new PublicError("URL afiliada deve usar HTTP ou HTTPS.");
  if (["localhost", "127.0.0.1", "0.0.0.0"].includes(parsed.hostname)) throw new PublicError("URL local nao permitida.");
  return parsed;
}

async function inspectUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "LojaDoApocalipse-LinkChecker/1.0" }
    });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "User-Agent": "LojaDoApocalipse-LinkChecker/1.0",
          Range: "bytes=0-2048"
        }
      });
    }
    const finalUrl = response.url || url.toString();
    const finalParsed = new URL(finalUrl);
    const suspicious = response.redirected && finalParsed.protocol !== "https:";
    const status = suspicious ? "suspicious_redirect" : response.status >= 200 && response.status < 400 ? "active" : "invalid";
    return {
      status,
      status_code: response.status,
      final_url: finalUrl,
      redirected: response.redirected,
      error: response.ok || suspicious ? null : `HTTP ${response.status}`
    };
  } catch (error) {
    if (error?.name === "AbortError") {
      return { status: "timeout", status_code: null, final_url: null, redirected: false, error: "Timeout" };
    }
    return { status: "error", status_code: null, final_url: null, redirected: false, error: "Falha ao verificar URL" };
  } finally {
    clearTimeout(timeout);
  }
}

function setCors(req, res) {
  const origin = req.headers.origin || "";
  const allowed = process.env.APP_ORIGIN || process.env.VERCEL_PROJECT_PRODUCTION_URL || "";
  if (!allowed || origin.includes(allowed.replace(/^https?:\/\//, ""))) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
