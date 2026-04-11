import { Box, Flex, Heading, Text, SimpleGrid, Badge } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Marcelo Ribeiro',
    role: 'CEO · TechStart',
    avatar: 'MR',
    text: 'A NovaWave transformou completamente nossa operação. O sistema de IA reduziu 40% dos custos operacionais em apenas 3 meses. Equipe excepcional.',
    rating: 5,
  },
  {
    name: 'Carolina Mendes',
    role: 'CTO · FinEdge',
    avatar: 'CM',
    text: 'Profissionalismo de outro nível. O NovaShield blindou nossa infraestrutura e nos deu total confiança para escalar. Recomendo sem hesitar.',
    rating: 5,
  },
  {
    name: 'André Oliveira',
    role: 'Diretor · LogiPrime',
    avatar: 'AO',
    text: 'Os dashboards do NovaAnalytics mudaram a forma como tomamos decisões. Dados em tempo real com uma interface impressionante.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Box py={{ base: '80px', md: '120px' }} position="relative" overflow="hidden">
      {/* Background */}
      <Box
        position="absolute"
        w="700px"
        h="700px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)"
        top="-20%"
        right="-10%"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        <Flex direction="column" align="center" textAlign="center" mb="64px" gap="16px">
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
            Depoimentos
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={700}
            color="#1a1a3e"
            lineHeight={1.2}
          >
            O que nossos clientes <Box as="span" className="gradient-text">dizem</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="550px">
            Resultados reais de empresas que confiaram na NovaWave para transformar seus negócios.
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="24px" maxW="1200px" mx="auto">
          {testimonials.map((t) => (
            <Box
              key={t.name}
              p="36px"
              borderRadius="20px"
              bg="rgba(255,255,255,0.95)"
              border="1px solid rgba(108,99,255,0.1)"
              _hover={{
                borderColor: 'rgba(108,99,255,0.25)',
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(108,99,255,0.1)',
              }}
              transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
              position="relative"
              overflow="hidden"
            >
              {/* Accent corner */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100px"
                h="100px"
                bg="radial-gradient(circle at top left, rgba(108,99,255,0.08) 0%, transparent 70%)"
                pointerEvents="none"
              />

              {/* Stars */}
              <Flex gap="4px" mb="20px">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Box key={i} color="#fbbf24">
                    <i className="bi bi-star-fill" style={{ fontSize: '16px' }} />
                  </Box>
                ))}
              </Flex>

              {/* Quote */}
              <Text fontSize="15px" color="#64748b" lineHeight={1.8} mb="28px" fontStyle="italic">
                "{t.text}"
              </Text>

              {/* Author */}
              <Flex align="center" gap="14px">
                <Flex
                  w="48px"
                  h="48px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
                  align="center"
                  justify="center"
                  fontSize="16px"
                  fontWeight={800}
                  color="#fff"
                  flexShrink={0}
                >
                  {t.avatar}
                </Flex>
                <Box>
                  <Text fontSize="15px" fontWeight={700} color="#1a1a3e">{t.name}</Text>
                  <Text fontSize="13px" color="#64748b">{t.role}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
