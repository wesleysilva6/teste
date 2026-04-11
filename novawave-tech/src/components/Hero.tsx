import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box id="hero" position="relative" minH="100vh" overflow="hidden" display="flex" flexDirection="column">
      {/* Animated background layers */}
      <Box
        position="absolute"
        w="1000px"
        h="1000px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 60%)"
        top="-20%"
        left="-15%"
        filter="blur(120px)"
        pointerEvents="none"
        animation="glowPulse 6s ease-in-out infinite"
      />
      <Box
        position="absolute"
        w="800px"
        h="800px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 60%)"
        bottom="-10%"
        right="-10%"
        filter="blur(100px)"
        pointerEvents="none"
        animation="glowPulse 8s ease-in-out infinite reverse"
      />
      <Box
        position="absolute"
        w="400px"
        h="400px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 60%)"
        top="40%"
        right="20%"
        filter="blur(80px)"
        pointerEvents="none"
        animation="glowPulse 10s ease-in-out infinite"
      />

      {/* Grid overlay */}
      <Box
        position="absolute"
        inset={0}
        className="hero-grid-bg"
        pointerEvents="none"
      />

      {/* Floating particles */}
      <Box position="absolute" inset={0} className="hero-particles" pointerEvents="none" />

      {/* Main content */}
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1} pt={{ base: '140px', md: '160px' }} pb="40px" px={{ base: '20px', md: '48px' }} flex={1}>
        <Flex direction="column" align="center" textAlign="center" gap="28px">
          {/* Main heading */}
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '60px', lg: '78px' }}
            fontWeight={900}
            lineHeight={1.05}
            color="#1a1a3e"
            maxW="950px"
            letterSpacing="-3px"
            className="hero-title-animate"
          >
            Construímos o{' '}
            <Box as="span" className="gradient-text">futuro</Box>
            <br />
            da tecnologia
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: '17px', md: '20px' }}
            color="#64748b"
            maxW="600px"
            lineHeight={1.8}
            className="hero-subtitle-animate"
          >
            Soluções digitais de ponta que impulsionam crescimento, eficiência e
            inovação para empresas que pensam grande.
          </Text>

          {/* CTA buttons */}
          <Flex gap="16px" flexWrap="wrap" justify="center" mt="8px" className="hero-cta-animate">
            <Box
              asChild
              px="40px"
              py="18px"
              borderRadius="50px"
              bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
              color="#fff"
              fontWeight={700}
              fontSize="16px"
              boxShadow="0 4px 30px rgba(108,99,255,0.45)"
              _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 40px rgba(108,99,255,0.6)' }}
              transition="all 0.3s"
              display="inline-flex"
              alignItems="center"
              gap="10px"
            >
              <a href="#products">
                Explorar Produtos <i className="bi bi-arrow-right" style={{ fontSize: '18px' }} />
              </a>
            </Box>
            <Box
              asChild
              px="40px"
              py="18px"
              borderRadius="50px"
              border="2px solid rgba(108,99,255,0.3)"
              color="#6c63ff"
              fontWeight={600}
              fontSize="16px"
              bg="rgba(108,99,255,0.05)"
              _hover={{ borderColor: '#6c63ff', bg: 'rgba(108,99,255,0.08)', transform: 'translateY(-3px)' }}
              transition="all 0.3s"
            >
              <a href="#contact">Solicitar Demo</a>
            </Box>
          </Flex>

        </Flex>
      </Box>

      {/* Scroll indicator */}
      <Box
        asChild
        position="absolute"
        bottom="28px"
        left="50%"
        transform="translateX(-50%)"
        color="#c7d2e0"
        animation="bounce 2s ease infinite"
      >
        <a href="#products" aria-label="Scroll">
          <i className="bi bi-chevron-down" style={{ fontSize: '28px' }} />
        </a>
      </Box>
    </Box>
  );
}
