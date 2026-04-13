import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

/* --- Data ------------------------------------------------- */

const products = [
  {
    icon: 'bi-boxes',
    title: 'NovaEstoque',
    tag: 'Gestao Empresarial',
    color: '#fbbf24',
    description:
      'Sistema completo de controle de estoque integrado a um painel de vendas inteligente, com relatorios em tempo real e alertas automaticos de reposicao.',
    features: [
      'Controle de entrada e saida de produtos',
      'Painel de vendas com graficos em tempo real',
      'Alertas automaticos de estoque minimo',
      'Relatorios exportaveis em PDF e Excel',
    ],
    snippet: [
      '// Relatorio de vendas - hoje',
      'const vendas = await db.vendas',
      '  .where({ data: today() })',
      '  .sum("total");',
      '// => R$ 14.820,00',
    ],
    lang: 'TypeScript',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    icon: 'bi-trophy-fill',
    title: 'NovaArena',
    tag: 'Gestao Esportiva',
    color: '#34d399',
    description:
      'Plataforma web completa para gerenciamento de arenas e centros esportivos - agendamentos, reservas de quadras, controle de clientes e relatorios de ocupacao.',
    features: [
      'Reserva e agendamento de quadras online',
      'Controle de clientes e mensalistas',
      'Relatorio de ocupação e faturamento',
      'Painel administrativo responsivo',
    ],
    snippet: [
      '// Verificar disponibilidade',
      'POST /api/quadras/disponibilidade',
      '{',
      '  "data": "2026-04-13",',
      '  "horario": "19:00"',
      '}',
    ],
    lang: 'REST API',
    stack: ['PHP', 'React', 'TypeScript', 'Node', 'Docker', 'PostgreSQL', 'JavaScript'],
  },
  {
    icon: 'bi-car-front-fill',
    title: 'NovaMotors',
    tag: 'Mercado Automotivo',
    color: '#60a5fa',
    description:
      'Sistema web para anuncio, visualizacao e cadastro de veiculos automotivos - com filtros avancados, ficha tecnica detalhada e painel de gestao para revendedoras.',
    features: [
      'Cadastro completo com fotos e ficha tecnica',
      'Busca avancada por marca, modelo e preco',
      'Painel da revendedora com metricas',
      'Visualizacao publica otimizada para SEO',
    ],
    snippet: [
      '// Busca de veiculos',
      'GET /api/veiculos?marca=Toyota',
      '         &ano_min=2020',
      '         &preco_max=80000',
      '// => 12 resultados encontrados',
    ],
    lang: 'REST API',
    stack: ['PHP', 'React', 'TypeScript', 'Docker', 'PostgreSQL'],
  },
];

/* --- Helpers ---------------------------------------------- */

function Feature({ text }: { text: string }) {
  return (
    <Flex align="center" gap="9px">
      <Box w="5px" h="5px" borderRadius="50%" bg="currentColor" flexShrink={0} opacity={0.75} />
      <Text fontSize="13px" color="#64748b" lineHeight={1.6}>{text}</Text>
    </Flex>
  );
}

function CodeSnip({ lines, lang, color }: { lines: string[]; lang: string; color: string }) {
  return (
    <Box borderRadius="12px" overflow="hidden" border={`1px solid ${color}25`} bg="#0d1117">
      <Flex align="center" justify="space-between" px="12px" py="7px" bg="#161b22"
        borderBottom="1px solid rgba(255,255,255,0.04)">
        <Flex gap="5px">
          <Box w="8px" h="8px" borderRadius="50%" bg="#ff5f57" />
          <Box w="8px" h="8px" borderRadius="50%" bg="#febc2e" />
          <Box w="8px" h="8px" borderRadius="50%" bg="#28c840" />
        </Flex>
        <Badge px="8px" py="2px" borderRadius="6px" fontSize="9px" fontWeight={700}
          bg={`${color}22`} color={color} letterSpacing="0.5px">{lang}</Badge>
      </Flex>
      <Box px="16px" py="12px">
        {lines.map((l, i) => (
          <Text key={i} fontFamily="'JetBrains Mono',monospace" fontSize="11px"
            color={
              l.startsWith('//') ? '#6e7681' :
              l.startsWith('GET') || l.startsWith('POST') ? '#60a5fa' :
              l.includes('?') ? '#34d399' :
              '#e6edf3'
            }
            lineHeight="1.85">{l}</Text>
        ))}
        <Box display="inline-block" w="2px" h="12px" bg={color}
          mt="6px" verticalAlign="text-bottom" className="typing-cursor" />
      </Box>
    </Box>
  );
}

/* --- Main component --------------------------------------- */

export default function Products() {
  return (
    <Box id="products" py={{ base: '80px', md: '120px' }} position="relative" overflow="hidden">
      <Box position="absolute" w="600px" h="600px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.09) 0%, transparent 70%)"
        top="0%" right="-15%" filter="blur(120px)" pointerEvents="none" />
      <Box position="absolute" w="450px" h="450px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)"
        bottom="5%" left="-10%" filter="blur(100px)" pointerEvents="none" />

      <Box maxW="1300px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>

        <Flex direction="column" align="center" textAlign="center" mb="64px" gap="16px">
          <Badge px="20px" py="6px" borderRadius="50px"
            bg="rgba(255,255,255,0.9)" border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff" fontSize="12px" fontWeight={600}
            letterSpacing="2px" textTransform="uppercase">
             produtos 
          </Badge>
          <Heading fontSize={{ base: '36px', md: '54px' }} fontWeight={900}
            color="#1a1a3e" lineHeight={1.05} letterSpacing="-2px" maxW="720px">
            Sistemas que{' '}
            <Box as="span" className="gradient-text">já entregamos</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Soluções reais, desenvolvidas do zero, resolvendo problemas concretos de negócios.
          </Text>
        </Flex>

        <Flex direction="column" gap="24px">
          {products.map((p, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <Box
                key={p.title}
                borderRadius="24px"
                overflow="hidden"
                bg="rgba(255,255,255,0.95)"
                border={`1px solid ${p.color}22`}
                boxShadow="0 4px 32px rgba(0,0,0,0.04)"
                position="relative"
                role="group"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 20px 64px ${p.color}18`,
                  borderColor: `${p.color}44`,
                }}
                transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
              >
                <Box position="absolute" top={0} left={0} right={0} h="3px"
                  bg={`linear-gradient(90deg, ${p.color}, ${p.color}50 60%, transparent)`} />

                <Flex direction={{ base: 'column', lg: isReversed ? 'row-reverse' : 'row' }} align="stretch">

                  <Box p={{ base: '36px', md: '48px' }} flex={1}>
                    <Flex align="center" gap="14px" mb="20px" wrap="wrap">
                      <Flex w="54px" h="54px" borderRadius="16px" flexShrink={0}
                        bg={`${p.color}12`} border={`1px solid ${p.color}25`}
                        color={p.color} align="center" justify="center"
                        _groupHover={{ bg: `${p.color}22` }} transition="background 0.3s">
                        <i className={`bi ${p.icon}`} style={{ fontSize: '24px' }} />
                      </Flex>
                      <Box flex={1}>
                        <Badge px="10px" py="3px" borderRadius="50px" fontSize="10px" fontWeight={700}
                          bg={`${p.color}12`} color={p.color} textTransform="uppercase"
                          letterSpacing="1px" mb="5px" display="block" w="fit-content">
                          {p.tag}
                        </Badge>
                        <Heading fontSize={{ base: '24px', md: '28px' }} fontWeight={900} color="#1a1a3e" lineHeight={1}>
                          {p.title}
                        </Heading>
                      </Box>
                    </Flex>

                    <Text fontSize="15px" color="#475569" lineHeight={1.8} mb="24px">
                      {p.description}
                    </Text>

                    <Flex direction="column" gap="10px" mb="28px" color={p.color}>
                      {p.features.map((f) => <Feature key={f} text={f} />)}
                    </Flex>

                    <Flex align="center" gap="8px" wrap="wrap" mb="28px">
                      <Text fontSize="11px" color="#94a3b8" fontWeight={600} mr="4px"
                        letterSpacing="0.5px" textTransform="uppercase">Stack:</Text>
                      {p.stack.map((s) => (
                        <Badge key={s} px="10px" py="4px" borderRadius="8px" fontSize="11px"
                          fontFamily="'JetBrains Mono',monospace" fontWeight={600}
                          bg="rgba(108,99,255,0.08)" color="#6c63ff"
                          border="1px solid rgba(108,99,255,0.15)">
                          {s}
                        </Badge>
                      ))}
                    </Flex>

                    <Flex align="center" gap="8px" color={p.color} fontSize="13px" fontWeight={700}
                      _groupHover={{ gap: '14px' }} transition="gap 0.25s" cursor="pointer">
                      Ver sistema <i className="bi bi-arrow-right" />
                    </Flex>
                  </Box>

                  <Flex align="center" justify="center"
                    p={{ base: '0 36px 36px', lg: '48px' }}
                    minW={{ lg: '340px' }} maxW={{ lg: '380px' }}>
                    <Box w="100%">
                      <CodeSnip lines={p.snippet} lang={p.lang} color={p.color} />
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Flex>

        <Flex align="center" justify="center" gap="10px" mt="48px"
          p="20px 32px" borderRadius="16px"
          bg="rgba(108,99,255,0.05)" border="1px solid rgba(108,99,255,0.12)">
          <i className="bi bi-code-slash" style={{ color: '#6c63ff', fontSize: '18px' }} />
          <Text fontSize="14px" color="#64748b" fontWeight={500}>
            Mais sistemas em desenvolvimento.{' '}
            <Box as="span" color="#6c63ff" fontWeight={700} cursor="pointer"
              _hover={{ textDecoration: 'underline' }}>
              Entre em contato
            </Box>{' '}para discutir a sua ideia.
          </Text>
        </Flex>

      </Box>
    </Box>
  );
}
