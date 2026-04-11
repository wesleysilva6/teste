import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

const steps = [
  {
    number: '01',
    icon: <i className="bi bi-person-plus-fill" style={{ fontSize: '28px' }} />,
    title: 'Primeiro Contato',
    description: 'Você nos conta sua ideia e desafio. Fazemos uma análise completa das suas necessidades.',
    color: '#6c63ff',
  },
  {
    number: '02',
    icon: <i className="bi bi-search" style={{ fontSize: '28px' }} />,
    title: 'Análise & Estratégia',
    description: 'Nossa equipe mapeia a melhor solução e define o roadmap do projeto com metas claras.',
    color: '#00e5ff',
  },
  {
    number: '03',
    icon: <i className="bi bi-code-slash" style={{ fontSize: '28px' }} />,
    title: 'Desenvolvimento',
    description: 'Construímos com sprints ágeis, entregas frequentes e total transparência no processo.',
    color: '#a78bfa',
  },
  {
    number: '04',
    icon: <i className="bi bi-rocket-takeoff-fill" style={{ fontSize: '28px' }} />,
    title: 'Lançamento & Suporte',
    description: 'Deploy em produção com monitoramento 24/7 e suporte contínuo para escalar seu negócio.',
    color: '#34d399',
  },
];

export default function HowItWorks() {
  return (
    <Box id="how-it-works" py={{ base: '80px', md: '120px' }} bg="#f0f0fa" position="relative" overflow="hidden">
      {/* Background */}
      <Box
        position="absolute"
        w="600px"
        h="600px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        <Flex direction="column" align="center" textAlign="center" mb="80px" gap="16px">
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
            Como Funciona
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={700}
            color="#1a1a3e"
            lineHeight={1.2}
          >
            Em ação em <Box as="span" className="gradient-text">4 passos</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="550px">
            Do primeiro contato ao deploy — um processo claro, ágil e sem surpresas.
          </Text>
        </Flex>

        {/* Steps timeline */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '0', lg: '0' }}
          position="relative"
          maxW="1200px"
          mx="auto"
        >
          {/* Connecting line */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="absolute"
            top="44px"
            left="10%"
            right="10%"
            h="2px"
            bg="linear-gradient(90deg, #6c63ff, #00e5ff, #a78bfa, #34d399)"
            opacity={0.3}
            zIndex={0}
          />
          <Box
            display={{ base: 'block', lg: 'none' }}
            position="absolute"
            top="0"
            bottom="0"
            left="35px"
            w="2px"
            bg="linear-gradient(180deg, #6c63ff, #00e5ff, #a78bfa, #34d399)"
            opacity={0.3}
            zIndex={0}
          />

          {steps.map((step, i) => (
            <Flex
              key={step.number}
              direction={{ base: 'row', lg: 'column' }}
              align={{ base: 'flex-start', lg: 'center' }}
              flex={1}
              position="relative"
              zIndex={1}
              gap={{ base: '20px', lg: '0' }}
              pb={{ base: i < 3 ? '48px' : '0', lg: '0' }}
            >
              {/* Circle + number */}
              <Flex
                w={{ base: '72px', lg: '88px' }}
                h={{ base: '72px', lg: '88px' }}
                borderRadius="50%"
                bg="#191932"
                border={`2px solid ${step.color}40`}
                align="center"
                justify="center"
                flexShrink={0}
                position="relative"
                boxShadow={`0 0 30px ${step.color}20`}
              >
                <Flex
                  w={{ base: '56px', lg: '68px' }}
                  h={{ base: '56px', lg: '68px' }}
                  borderRadius="50%"
                  bg={`${step.color}15`}
                  align="center"
                  justify="center"
                  color={step.color}
                >
                  {step.icon}
                </Flex>
                <Box
                  position="absolute"
                  top={{ base: '-6px', lg: '-8px' }}
                  right={{ base: '-6px', lg: '-4px' }}
                  bg={step.color}
                  color="#fff"
                  fontSize="11px"
                  fontWeight={800}
                  w="26px"
                  h="26px"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow={`0 2px 10px ${step.color}60`}
                >
                  {step.number}
                </Box>
              </Flex>

              {/* Content */}
              <Box textAlign={{ base: 'left', lg: 'center' }} mt={{ base: '0', lg: '20px' }} px={{ base: '0', lg: '12px' }}>
                <Heading fontSize={{ base: '18px', lg: '20px' }} fontWeight={700} color="#1a1a3e" mb="8px">
                  {step.title}
                </Heading>
                <Text fontSize="14px" color="#64748b" lineHeight={1.7} maxW="240px" mx={{ base: '0', lg: 'auto' }}>
                  {step.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
