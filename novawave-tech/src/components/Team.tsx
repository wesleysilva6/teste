import { Box, Flex, Heading, Text, Badge, HStack } from '@chakra-ui/react';

const members = [
  {
    name: 'Wesley Silva',
    role: 'CEO & Founder',
    avatar: 'WS',
    bio: 'Desenvolvedor full-stack apaixonado por criar solucoes que resolvem problemas reais. Fundador da NovaWave Tech com foco em qualidade, performance e impacto.',
    skills: ['PHP', 'React', 'TypeScript', 'Node', 'Docker', 'PostgreSQL', 'Laravel'],
    linkedin: 'https://www.linkedin.com/in/wesley-wagner-nunes-silva-424725359/',
    github: 'https://github.com/wesleysilva6',
  },
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
              w={{ base: '100%', sm: '420px' }}
              p="40px 36px"
              borderRadius="24px"
              bg="rgba(255,255,255,0.95)"
              border="1px solid rgba(108,99,255,0.12)"
              position="relative"
              overflow="hidden"
              _hover={{
                borderColor: 'rgba(108,99,255,0.3)',
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 56px rgba(108,99,255,0.14)',
              }}
              transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
            >
              {/* Top accent */}
              <Box position="absolute" top={0} left={0} right={0} h="3px"
                bg="linear-gradient(90deg, #6c63ff, #00e5ff, #a78bfa)" />

              {/* Founder badge */}
              <Badge
                position="absolute" top="20px" right="20px"
                px="12px" py="4px" borderRadius="50px" fontSize="10px" fontWeight={700}
                bg="rgba(52,211,153,0.1)" color="#34d399"
                border="1px solid rgba(52,211,153,0.25)" letterSpacing="0.5px"
              >
                Fundador
              </Badge>

              {/* Avatar + name */}
              <Flex align="center" gap="16px" mb="20px">
                <Box position="relative">
                  <Flex
                    w="72px" h="72px" borderRadius="50%"
                    bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
                    align="center" justify="center"
                    fontSize="22px" fontWeight={800} color="#fff"
                    boxShadow="0 4px 24px rgba(108,99,255,0.4)"
                    flexShrink={0}
                  >
                    {m.avatar}
                  </Flex>
                  <Box
                    position="absolute" bottom="2px" right="0px"
                    w="14px" h="14px" borderRadius="50%" bg="#34d399"
                    border="2px solid white"
                    boxShadow="0 0 8px #34d399"
                  />
                </Box>
                <Box>
                  <Heading fontSize="20px" fontWeight={800} color="#1a1a3e" mb="3px">
                    {m.name}
                  </Heading>
                  <Text fontSize="13px" color="#6c63ff" fontWeight={600}>
                    {m.role}
                  </Text>
                </Box>
              </Flex>

              {/* Bio */}
              <Text fontSize="14px" color="#64748b" lineHeight={1.75} mb="20px">
                {m.bio}
              </Text>

              {/* Skills */}
              <Flex gap="7px" flexWrap="wrap" mb="24px">
                {m.skills.map((s) => (
                  <Badge key={s} px="9px" py="3px" borderRadius="8px" fontSize="11px"
                    fontFamily="'JetBrains Mono',monospace" fontWeight={600}
                    bg="rgba(108,99,255,0.07)" color="#6c63ff"
                    border="1px solid rgba(108,99,255,0.14)">
                    {s}
                  </Badge>
                ))}
              </Flex>

              {/* Social links */}
              <HStack gap="10px">
                <Box
                  asChild
                  display="inline-flex" alignItems="center" gap="7px"
                  px="16px" py="8px" borderRadius="50px"
                  bg="rgba(108,99,255,0.08)" color="#6c63ff"
                  border="1px solid rgba(108,99,255,0.18)"
                  fontSize="13px" fontWeight={600}
                  _hover={{ bg: '#6c63ff', color: '#fff', transform: 'translateY(-1px)' }}
                  transition="all 0.25s"
                >
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${m.name}`}>
                    <i className="bi bi-linkedin" style={{ fontSize: '14px' }} /> LinkedIn
                  </a>
                </Box>
                <Box
                  asChild
                  display="inline-flex" alignItems="center" gap="7px"
                  px="16px" py="8px" borderRadius="50px"
                  bg="rgba(108,99,255,0.08)" color="#6c63ff"
                  border="1px solid rgba(108,99,255,0.18)"
                  fontSize="13px" fontWeight={600}
                  _hover={{ bg: '#1a1a3e', color: '#fff', transform: 'translateY(-1px)' }}
                  transition="all 0.25s"
                >
                  <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${m.name}`}>
                    <i className="bi bi-github" style={{ fontSize: '14px' }} /> GitHub
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
