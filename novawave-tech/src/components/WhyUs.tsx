import { Box, Flex, Heading, Text, Badge, SimpleGrid } from '@chakra-ui/react';

const cards = [
  {
    icon: 'bi-code-slash',
    title: 'Clean Code',
    subtitle: '// sempre legível',
    description: 'Escrevemos código que humanos entendem. Padrões SOLID, nomenclatura clara e revisão rigorosa em cada PR.',
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.08)',
    tag: 'Qualidade',
    snippet: 'const code = readable + maintainable;',
  },
  {
    icon: 'bi-shield-lock-fill',
    title: 'Security First',
    subtitle: '// zero vulnerabilidades',
    description: 'OWASP Top 10, autenticação robusta, sanitização de dados e criptografia aplicados desde o primeiro commit.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    tag: 'Segurança',
    snippet: 'if (!auth.valid) throw new ForbiddenError();',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Alta Performance',
    subtitle: '// <200ms de resposta',
    description: 'Otimização de queries, cache inteligente, lazy loading e monitoramento contínuo de latência em produção.',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    tag: 'Performance',
    snippet: 'await cache.get(key) ?? fetchAndStore();',
  },
  {
    icon: 'bi-arrows-angle-expand',
    title: 'Escalável por Design',
    subtitle: '// cresce com você',
    description: 'Arquitetura modular, microsserviços e infra elástica que acompanha o crescimento do seu negócio sem atritos.',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.08)',
    tag: 'Arquitetura',
    snippet: 'k8s scale --replicas=auto',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Deploy Contínuo',
    subtitle: '// zero downtime',
    description: 'CI/CD automatizado com testes, build, staging e rollout em produção — sem intervenção manual e sem risco.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.08)',
    tag: 'DevOps',
    snippet: 'git push origin main → deploy ✓',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Orientado a Dados',
    subtitle: '// decisões com evidência',
    description: 'Logs estruturados, dashboards em tempo real e alertas inteligentes para antecipar problemas antes do usuário.',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    tag: 'Observability',
    snippet: 'metrics.track("event", { value, userId });',
  },
];

export default function WhyUs() {
  return (
    <Box
      id="why-us"
      py={{ base: '80px', md: '120px' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background glows */}
      <Box position="absolute" w="600px" h="600px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.09) 0%, transparent 70%)"
        top="0%" right="-10%" filter="blur(110px)" pointerEvents="none" />
      <Box position="absolute" w="500px" h="500px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)"
        bottom="0%" left="-8%" filter="blur(90px)" pointerEvents="none" />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Header */}
        <Flex direction="column" align="center" textAlign="center" mb="72px" gap="16px">
          <Badge
            px="20px" py="6px" borderRadius="50px"
            bg="rgba(255,255,255,0.9)" border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff" fontSize="12px" fontWeight={600}
            letterSpacing="2px" textTransform="uppercase"
          >
            Por que a NovaWave?
          </Badge>
          <Heading fontSize={{ base: '32px', md: '52px' }} fontWeight={900}
            color="#1a1a3e" lineHeight={1.1} letterSpacing="-2px" maxW="700px">
            Princípios que guiam{' '}
            <Box as="span" className="gradient-text">cada linha de código</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Não entregamos apenas software — entregamos sistemas que resistem ao tempo e escalam sem limites.
          </Text>
        </Flex>

        {/* Cards grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="24px">
          {cards.map((c) => (
            <Box
              key={c.title}
              borderRadius="20px"
              bg="rgba(255,255,255,0.95)"
              border="1px solid rgba(108,99,255,0.1)"
              overflow="hidden"
              boxShadow="0 4px 24px rgba(108,99,255,0.05)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: `0 28px 60px ${c.color}18`,
                borderColor: `${c.color}50`,
              }}
              transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
            >
              {/* Accent top bar */}
              <Box h="3px" bg={`linear-gradient(90deg, ${c.color}, transparent)`} />

              <Box p="28px">
                {/* Icon + tag row */}
                <Flex align="center" justify="space-between" mb="20px">
                  <Flex
                    w="50px" h="50px" borderRadius="14px"
                    bg={c.bg} color={c.color}
                    align="center" justify="center" flexShrink={0}
                    boxShadow={`0 4px 20px ${c.color}25`}
                  >
                    <i className={`bi ${c.icon}`} style={{ fontSize: '22px' }} />
                  </Flex>
                  <Box
                    px="10px" py="4px" borderRadius="20px"
                    bg={c.bg} border={`1px solid ${c.color}30`}
                  >
                    <Text fontSize="10px" fontWeight={700} color={c.color}
                      letterSpacing="1px" textTransform="uppercase">
                      {c.tag}
                    </Text>
                  </Box>
                </Flex>

                {/* Title */}
                <Text fontSize="20px" fontWeight={800} color="#1a1a3e" mb="2px">
                  {c.title}
                </Text>
                <Text
                  fontSize="12px" color={c.color} fontWeight={600} mb="12px"
                  fontFamily="'JetBrains Mono','Fira Code',monospace"
                >
                  {c.subtitle}
                </Text>

                {/* Description */}
                <Text fontSize="14px" color="#64748b" lineHeight={1.7} mb="20px">
                  {c.description}
                </Text>

                {/* Code snippet */}
                <Box
                  borderRadius="8px" bg="#0d1117"
                  px="14px" py="10px"
                  border={`1px solid ${c.color}20`}
                >
                  <Text
                    fontFamily="'JetBrains Mono','Fira Code',monospace"
                    fontSize="11.5px"
                    color={c.color}
                    lineHeight={1.5}
                  >
                    {c.snippet}
                    <Box
                      as="span"
                      display="inline-block"
                      w="2px" h="0.9em"
                      bg={c.color}
                      ml="2px"
                      verticalAlign="text-bottom"
                      className="typing-cursor"
                    />
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
