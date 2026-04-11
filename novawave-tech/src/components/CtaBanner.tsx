import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function CtaBanner() {
  return (
    <Box py={{ base: '80px', md: '100px' }} bg="#f0f0fa" position="relative" overflow="hidden">
      {/* Background glows */}
      <Box
        position="absolute"
        w="600px"
        h="600px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)"
        top="50%"
        left="-10%"
        transform="translateY(-50%)"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        w="500px"
        h="500px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)"
        top="50%"
        right="-10%"
        transform="translateY(-50%)"
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Box maxW="1000px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        <Box
          textAlign="center"
          p={{ base: '48px 24px', md: '72px 64px' }}
          borderRadius="28px"
          bg="rgba(255,255,255,0.9)"
          border="1px solid rgba(108,99,255,0.15)"
          backdropFilter="blur(10px)"
          position="relative"
          overflow="hidden"
        >
          {/* Border gradient top */}
          <Box
            position="absolute"
            top={0}
            left="10%"
            right="10%"
            h="2px"
            bg="linear-gradient(90deg, transparent, #6c63ff, #00e5ff, transparent)"
          />
          {/* Border gradient bottom */}
          <Box
            position="absolute"
            bottom={0}
            left="20%"
            right="20%"
            h="1px"
            bg="linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)"
          />

          <Flex justify="center" mb="24px" color="#6c63ff">
            <i className="bi bi-stars" style={{ fontSize: '36px' }} />
          </Flex>

          <Heading
            fontSize={{ base: '28px', md: '44px' }}
            fontWeight={800}
            color="#1a1a3e"
            lineHeight={1.2}
            mb="20px"
            letterSpacing="-1px"
          >
            Pronto para{' '}
            <Box as="span" className="gradient-text">transformar</Box>
            {' '}seu negócio?
          </Heading>

          <Text fontSize={{ base: '16px', md: '18px' }} color="#64748b" maxW="500px" mx="auto" mb="40px" lineHeight={1.7}>
            Solicite uma demonstração gratuita e veja como a NovaWave pode impulsionar seus resultados.
          </Text>

          <Flex gap="16px" justify="center" flexWrap="wrap">
            <Box
              asChild
              px="40px"
              py="18px"
              borderRadius="50px"
              bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
              color="#fff"
              fontWeight={700}
              fontSize="16px"
              boxShadow="0 4px 30px rgba(108,99,255,0.5)"
              _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 40px rgba(108,99,255,0.6)' }}
              transition="all 0.3s"
              display="inline-flex"
              alignItems="center"
              gap="10px"
            >
              <a href="#contact">
                Agendar Demo Gratuita <i className="bi bi-arrow-right" style={{ fontSize: '18px' }} />
              </a>
            </Box>
          </Flex>

          <Text fontSize="13px" color="#94a3b8" mt="20px">
            Sem compromisso · Resposta em até 24h
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
