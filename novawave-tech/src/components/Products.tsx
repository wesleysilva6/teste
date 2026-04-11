import { Box, Flex, Heading, Text, SimpleGrid, Badge } from '@chakra-ui/react';

const products = [
  {
    icon: <i className="bi bi-robot" style={{ fontSize: '28px' }} />,
    title: 'NovaAI',
    description: 'Inteligência artificial avançada para automação de processos, análise preditiva e tomada de decisão inteligente.',
    tag: 'Inteligência Artificial',
    color: '#a78bfa',
    highlight: true,
  },
  {
    icon: <i className="bi bi-shield-lock-fill" style={{ fontSize: '28px' }} />,
    title: 'NovaShield',
    description: 'Plataforma de cibersegurança com proteção em tempo real, detecção de ameaças e resposta automatizada.',
    tag: 'Cibersegurança',
    color: '#34d399',
  },
  {
    icon: <i className="bi bi-bar-chart-fill" style={{ fontSize: '28px' }} />,
    title: 'NovaAnalytics',
    description: 'Dashboards inteligentes e relatórios dinâmicos para transformar dados brutos em insights estratégicos.',
    tag: 'Data Analytics',
    color: '#fbbf24',
  },
  {
    icon: <i className="bi bi-globe" style={{ fontSize: '28px' }} />,
    title: 'NovaWeb',
    description: 'Desenvolvimento de aplicações web de alta performance com experiência de usuário premium e responsiva.',
    tag: 'Desenvolvimento Web',
    color: '#60a5fa',
  },
  {
    icon: <i className="bi bi-cloud-fill" style={{ fontSize: '28px' }} />,
    title: 'NovaCloud',
    description: 'Infraestrutura cloud escalável com deploy automatizado, auto-scaling e monitoramento contínuo.',
    tag: 'Cloud Computing',
    color: '#f472b6',
  },
  {
    icon: <i className="bi bi-cpu-fill" style={{ fontSize: '28px' }} />,
    title: 'NovaEdge',
    description: 'Soluções de edge computing para IoT industrial, processamento local e latência ultra-baixa.',
    tag: 'Edge & IoT',
    color: '#00e5ff',
  },
];

export default function Products() {
  return (
    <Box id="products" py={{ base: '80px', md: '120px' }} position="relative" overflow="hidden">
      {/* Background glows */}
      <Box
        position="absolute"
        w="600px"
        h="600px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)"
        top="10%"
        right="-15%"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        w="400px"
        h="400px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)"
        bottom="10%"
        left="-10%"
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        <Flex direction="column" align="center" textAlign="center" mb="72px" gap="16px">
          <Badge
            px="20px"
            py="6px"
            borderRadius="50px"
            bg="rgba(255,255,255,0.9)"
            border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff"
            fontSize="12px"
            fontWeight={600}
            letterSpacing="2px"
            textTransform="uppercase"
          >
            🛠 Produtos
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={800}
            color="#1a1a3e"
            lineHeight={1.2}
            letterSpacing="-1px"
          >
            Soluções que <Box as="span" className="gradient-text">transformam</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="600px" lineHeight={1.7}>
            Tecnologias de ponta desenvolvidas para resolver problemas reais e escalar seu negócio sem limites.
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="24px">
          {products.map((p) => (
            <Box
              key={p.title}
              p="36px"
              borderRadius="20px"
              bg="rgba(255,255,255,0.9)"
              border={p.highlight ? '1px solid rgba(108,99,255,0.3)' : '1px solid rgba(108,99,255,0.1)'}
              _hover={{
                bg: 'rgba(250,250,255,0.97)',
                borderColor: `${p.color}60`,
                transform: 'translateY(-8px)',
                boxShadow: `0 20px 50px rgba(108,99,255,0.08), 0 0 30px ${p.color}20`,
              }}
              transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              role="group"
            >
              {/* Top gradient line */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="2px"
                bg={`linear-gradient(90deg, ${p.color}, transparent 80%)`}
                opacity={0.5}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.3s"
              />

              {/* Icon */}
              <Flex
                w="56px"
                h="56px"
                borderRadius="16px"
                bg={`${p.color}12`}
                border={`1px solid ${p.color}20`}
                color={p.color}
                align="center"
                justify="center"
                mb="20px"
                _groupHover={{ bg: `${p.color}20`, transform: 'scale(1.05)' }}
                transition="all 0.3s"
              >
                {p.icon}
              </Flex>

              {/* Tag */}
              <Badge
                mb="16px"
                px="12px"
                py="4px"
                borderRadius="50px"
                fontSize="11px"
                fontWeight={600}
                letterSpacing="0.5px"
                bg={`${p.color}10`}
                color={p.color}
                textTransform="uppercase"
              >
                {p.tag}
              </Badge>

              <Heading fontSize="22px" fontWeight={700} color="#1a1a3e" mb="12px">
                {p.title}
              </Heading>
              <Text fontSize="15px" color="#64748b" lineHeight={1.7} mb="20px">
                {p.description}
              </Text>

              {/* Learn more link */}
              <Flex
                align="center"
                gap="6px"
                color="#94a3b8"
                fontSize="13px"
                fontWeight={600}
                _groupHover={{ color: p.color }}
                transition="color 0.3s"
              >
                Saiba mais <i className="bi bi-arrow-right" style={{ fontSize: '14px' }} />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
