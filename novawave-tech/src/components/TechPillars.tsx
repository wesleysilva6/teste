import { Box, Flex, Heading, Text, Badge, SimpleGrid } from '@chakra-ui/react';

const pillars = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces que encantam',
    icon: 'bi-layout-wtf',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.25)',
    prompt: '$ npm run dev',
    stack: [
      { name: 'React 19', icon: 'bi-arrow-repeat',    color: '#61dafb' },
      { name: 'TypeScript', icon: 'bi-filetype-tsx',  color: '#3178c6' },
      { name: 'Vite',       icon: 'bi-lightning-fill', color: '#a78bfa' },
      { name: 'Chakra UI',  icon: 'bi-grid-fill',      color: '#319795' },
      { name: 'Framer',     icon: 'bi-play-circle-fill', color: '#f472b6' },
    ],
    features: [
      'SPA / SSR / SSG com performance 100',
      'Design System com tokens customizados',
      'Acessibilidade WCAG 2.1 nativa',
      'Animações fluidas 60fps',
      'Bundle otimizado e code splitting',
    ],
    snippet: [
      <><span style={{color:'#ff7b72'}}>const</span> <span style={{color:'#ffa657'}}>App</span> <span style={{color:'#8b949e'}}>=</span> <span style={{color:'#8b949e'}}>()</span> <span style={{color:'#ff7b72'}}>=&gt;</span> <span style={{color:'#8b949e'}}>(</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#8b949e'}}>&lt;</span><span style={{color:'#7ee787'}}>NovaProvider</span><span style={{color:'#8b949e'}}>&gt;</span></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#8b949e'}}>&lt;</span><span style={{color:'#7ee787'}}>App</span> <span style={{color:'#79c0ff'}}>theme</span><span style={{color:'#8b949e'}}>=</span><span style={{color:'#a5d6ff'}}>"nova"</span> <span style={{color:'#8b949e'}}>/&gt;</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#8b949e'}}>&lt;/</span><span style={{color:'#7ee787'}}>NovaProvider</span><span style={{color:'#8b949e'}}>&gt;</span></>,
      <><span style={{color:'#8b949e'}}>);</span></>,
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs robustas e escaláveis',
    icon: 'bi-server',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.25)',
    prompt: '$ node dist/server.js',
    stack: [
      { name: 'Node.js',    icon: 'bi-server',         color: '#3c873a' },
      { name: 'Python',     icon: 'bi-filetype-py',    color: '#f7c948' },
      { name: 'PostgreSQL', icon: 'bi-database-fill',  color: '#336791' },
      { name: 'Redis',      icon: 'bi-hdd-fill',        color: '#dc2626' },
      { name: 'GraphQL',    icon: 'bi-diagram-3-fill', color: '#e10098' },
    ],
    features: [
      'APIs REST e GraphQL tipadas',
      'Autenticação JWT + OAuth 2.0',
      'Cache inteligente com Redis',
      'ORM type-safe com Prisma',
      'Rate limiting e proteção DDoS',
    ],
    snippet: [
      <><span style={{color:'#d2a8ff'}}>@Post</span><span style={{color:'#8b949e'}}>('</span><span style={{color:'#a5d6ff'}}>/api/process</span><span style={{color:'#8b949e'}}>')</span></>,
      <><span style={{color:'#ff7b72'}}>async</span> <span style={{color:'#d2a8ff'}}>processData</span><span style={{color:'#8b949e'}}>(</span><span style={{color:'#ffa657'}}>req</span><span style={{color:'#8b949e'}}>)</span> <span style={{color:'#8b949e'}}>{`{`}</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#ff7b72'}}>const</span> <span style={{color:'#ffa657'}}>result</span> <span style={{color:'#8b949e'}}>=</span> <span style={{color:'#ff7b72'}}>await</span> <span style={{color:'#d2a8ff'}}>ai</span><span style={{color:'#8b949e'}}>.</span><span style={{color:'#d2a8ff'}}>analyze</span><span style={{color:'#8b949e'}}>(</span><span style={{color:'#ffa657'}}>req</span><span style={{color:'#8b949e'}}>.</span><span style={{color:'#79c0ff'}}>body</span><span style={{color:'#8b949e'}}>);</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#ff7b72'}}>return</span> <span style={{color:'#8b949e'}}>{'{'}</span> <span style={{color:'#79c0ff'}}>ok</span><span style={{color:'#8b949e'}}>:</span> <span style={{color:'#79c0ff'}}>true</span><span style={{color:'#8b949e'}}>,</span> <span style={{color:'#ffa657'}}>result</span> <span style={{color:'#8b949e'}}>{'}'};</span></>,
      <><span style={{color:'#8b949e'}}>{`}`}</span></>,
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Infraestrutura que não para',
    icon: 'bi-infinity',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.25)',
    prompt: '$ kubectl get pods -A',
    stack: [
      { name: 'Docker',     icon: 'bi-box-seam-fill',  color: '#2496ed' },
      { name: 'Kubernetes', icon: 'bi-layers-fill',     color: '#326ce5' },
      { name: 'AWS',        icon: 'bi-cloud-fill',      color: '#ff9900' },
      { name: 'Terraform',  icon: 'bi-braces-asterisk', color: '#7b42bc' },
      { name: 'GitHub CI',  icon: 'bi-git',             color: '#e6edf3' },
    ],
    features: [
      'Containers orquestrados com K8s',
      'IaC com Terraform e Ansible',
      'Pipeline CI/CD com zero downtime',
      'Monitoramento 24/7 com alertas',
      'Auto-scaling baseado em métricas',
    ],
    snippet: [
      <><span style={{color:'#79c0ff'}}>replicas</span><span style={{color:'#8b949e'}}>:</span> <span style={{color:'#3fb950'}}>3</span></>,
      <><span style={{color:'#79c0ff'}}>strategy</span><span style={{color:'#8b949e'}}>:</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#79c0ff'}}>type</span><span style={{color:'#8b949e'}}>:</span> <span style={{color:'#a5d6ff'}}>RollingUpdate</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#79c0ff'}}>maxUnavailable</span><span style={{color:'#8b949e'}}>:</span> <span style={{color:'#3fb950'}}>0</span></>,
      <>&nbsp;&nbsp;<span style={{color:'#79c0ff'}}>maxSurge</span><span style={{color:'#8b949e'}}>:</span> <span style={{color:'#3fb950'}}>1</span></>,
    ],
  },
];

export default function TechPillars() {
  return (
    <Box
      id="tech-pillars"
      py={{ base: '80px', md: '120px' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background glows */}
      <Box position="absolute" w="600px" h="600px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)"
        top="20%" left="-10%" filter="blur(100px)" pointerEvents="none" />
      <Box position="absolute" w="500px" h="500px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)"
        bottom="0%" right="-10%" filter="blur(90px)" pointerEvents="none" />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Header */}
        <Flex direction="column" align="center" textAlign="center" mb="72px" gap="16px">
          <Badge
            px="20px" py="6px" borderRadius="50px"
            bg="rgba(255,255,255,0.9)" border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff" fontSize="12px" fontWeight={600}
            letterSpacing="2px" textTransform="uppercase"
          >
            ⚙️ Stack Completa
          </Badge>
          <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight={800}
            color="#1a1a3e" lineHeight={1.2} letterSpacing="-1px">
            Do código ao{' '}
            <Box as="span" className="gradient-text">deploy</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Dominamos toda a cadeia de desenvolvimento — do pixel ao servidor.
          </Text>
        </Flex>

        {/* Pillar cards */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="28px">
          {pillars.map((p) => (
            <Box
              key={p.id}
              borderRadius="20px" overflow="hidden"
              border={`1px solid ${p.border}`}
              bg="rgba(255,255,255,0.92)"
              boxShadow="0 8px 40px rgba(108,99,255,0.06)"
              _hover={{ transform: 'translateY(-8px)', boxShadow: `0 24px 60px ${p.color}20`, borderColor: p.color }}
              transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
            >
              {/* Card header */}
              <Box p="28px 28px 20px" borderBottom={`1px solid ${p.border}`}>
                <Flex align="center" gap="14px" mb="14px">
                  <Flex
                    w="48px" h="48px" borderRadius="14px"
                    bg={p.bg} color={p.color}
                    align="center" justify="center" flexShrink={0}
                  >
                    <i className={`bi ${p.icon}`} style={{ fontSize: '22px' }} />
                  </Flex>
                  <Box>
                    <Text fontSize="20px" fontWeight={800} color="#1a1a3e" lineHeight={1}>{p.title}</Text>
                    <Text fontSize="13px" color="#64748b" mt="3px">{p.subtitle}</Text>
                  </Box>
                </Flex>

                {/* Mini code snippet */}
                <Box
                  borderRadius="10px" overflow="hidden"
                  border="1px solid rgba(255,255,255,0.06)"
                >
                  <Flex align="center" gap="5px" px="12px" py="7px" bg="#161b22">
                    <Box w="8px" h="8px" borderRadius="50%" bg="#ff5f57" />
                    <Box w="8px" h="8px" borderRadius="50%" bg="#febc2e" />
                    <Box w="8px" h="8px" borderRadius="50%" bg="#28c840" />
                    <Text ml="8px" fontFamily="'JetBrains Mono','Fira Code',monospace"
                      fontSize="10px" color="#6e7681">{p.prompt}</Text>
                  </Flex>
                  <Box bg="#0d1117" px="14px" py="12px"
                    fontFamily="'JetBrains Mono','Fira Code',monospace"
                    fontSize="11.5px" lineHeight={1.9}>
                    {p.snippet.map((line, i) => (
                      <Box key={i} as="div" color="#e6edf3">{line}</Box>
                    ))}
                    <Box display="inline-block" w="2px" h="1em"
                      bg={p.color} verticalAlign="text-bottom"
                      className="typing-cursor" />
                  </Box>
                </Box>
              </Box>

              {/* Stack icons */}
              <Box px="28px" py="18px" borderBottom={`1px solid ${p.border}`}>
                <Text fontSize="11px" fontWeight={700} color="#94a3b8"
                  letterSpacing="1.5px" textTransform="uppercase" mb="12px">
                  Tecnologias
                </Text>
                <Flex gap="8px" flexWrap="wrap">
                  {p.stack.map((s) => (
                    <Flex
                      key={s.name} align="center" gap="6px"
                      px="10px" py="5px" borderRadius="20px"
                      bg={`${s.color}14`} border={`1px solid ${s.color}30`}
                    >
                      <i className={`bi ${s.icon}`} style={{ fontSize: '12px', color: s.color }} />
                      <Text fontSize="11px" fontWeight={600} color="#1a1a3e" whiteSpace="nowrap">
                        {s.name}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* Features */}
              <Box px="28px" py="20px">
                <Text fontSize="11px" fontWeight={700} color="#94a3b8"
                  letterSpacing="1.5px" textTransform="uppercase" mb="12px">
                  Capacidades
                </Text>
                <Flex direction="column" gap="8px">
                  {p.features.map((f) => (
                    <Flex key={f} align="center" gap="10px">
                      <Box w="6px" h="6px" borderRadius="50%" bg={p.color} flexShrink={0} />
                      <Text fontSize="13px" color="#475569">{f}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
