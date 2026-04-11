import { Box, Flex, Heading, Text, Badge, HStack } from '@chakra-ui/react';

const members = [
  { name: 'Wesley Silva', role: 'CEO & Founder', avatar: 'WS', linkedin: 'https://www.linkedin.com/in/wesley-wagner-nunes-silva-424725359/', github: 'https://github.com/wesleysilva6' },
];

export default function Team() {
  return (
    <Box id="team" py={{ base: '80px', md: '120px' }} bg="#f0f0fa" position="relative">
      {/* Background glow */}
      <Box
        position="absolute"
        w="500px"
        h="500px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)"
        top="30%"
        left="-10%"
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
            Equipe
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={700}
            color="#1a1a3e"
            lineHeight={1.2}
          >
            Mentes <Box as="span" className="gradient-text">brilhantes</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="600px">
            Profissionais apaixonados por tecnologia, unidos pela missão de construir o futuro.
          </Text>
        </Flex>

        <Flex justify="center" flexWrap="wrap" gap="24px" maxW="1100px" mx="auto">
          {members.map((m) => (
            <Box
              key={m.name}
              w={{ base: '100%', sm: '320px' }}
              textAlign="center"
              p="40px 28px"
              borderRadius="20px"
              bg="rgba(255,255,255,0.9)"
              border="1px solid rgba(108,99,255,0.1)"
              _hover={{
                borderColor: 'rgba(108,99,255,0.3)',
                transform: 'translateY(-6px)',
                boxShadow: '0 12px 40px rgba(108,99,255,0.12)',
              }}
              transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
            >
              <Flex
                w="80px"
                h="80px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
                align="center"
                justify="center"
                mx="auto"
                mb="20px"
                fontSize="24px"
                fontWeight={800}
                color="#fff"
                boxShadow="0 4px 25px rgba(108,99,255,0.35)"
              >
                {m.avatar}
              </Flex>
              <Heading fontSize="18px" fontWeight={700} color="#1a1a3e" mb="4px">
                {m.name}
              </Heading>
              <Text fontSize="14px" color="#6c63ff" fontWeight={500} mb="16px">
                {m.role}
              </Text>
              <HStack justify="center" gap="10px">
                <Box
                  asChild
                  w="38px"
                  h="38px"
                  borderRadius="50%"
                  bg="rgba(108,99,255,0.1)"
                  color="#64748b"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: '#6c63ff', color: '#fff', transform: 'scale(1.1)' }}
                  transition="all 0.3s"
                >
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${m.name}`}>
                    <i className="bi bi-linkedin" style={{ fontSize: '16px' }} />
                  </a>
                </Box>
                <Box
                  asChild
                  w="38px"
                  h="38px"
                  borderRadius="50%"
                  bg="rgba(108,99,255,0.1)"
                  color="#64748b"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: '#6c63ff', color: '#fff', transform: 'scale(1.1)' }}
                  transition="all 0.3s"
                >
                  <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${m.name}`}>
                    <i className="bi bi-github" style={{ fontSize: '16px' }} />
                  </a>
                </Box>
              </HStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
