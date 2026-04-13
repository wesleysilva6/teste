import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const frontend = [
  { name: 'HTML5',      icon: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS3',       icon: `${DEVICON}/css3/css3-original.svg` },
  { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Bootstrap',  icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: 'React',      icon: `${DEVICON}/react/react-original.svg` },
];

const backend = [
  { name: 'PHP',        icon: `${DEVICON}/php/php-original.svg` },
  { name: 'MySQL',      icon: `${DEVICON}/mysql/mysql-original.svg` },
  { name: 'Laravel',    icon: `${DEVICON}/laravel/laravel-original.svg` },
  { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
];

const tools = [
  { name: 'Git',    icon: `${DEVICON}/git/git-original.svg` },
  { name: 'npm',    icon: `${DEVICON}/npm/npm-original-wordmark.svg` },
  { name: 'VS Code',icon: `${DEVICON}/vscode/vscode-original.svg` },
  { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
];

function TechIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <Flex
      direction="column"
      align="center"
      gap="10px"
      p="20px 16px"
      borderRadius="16px"
      bg="rgba(255,255,255,0.95)"
      border="1px solid rgba(108,99,255,0.1)"
      boxShadow="0 2px 12px rgba(108,99,255,0.05)"
      _hover={{
        bg: 'white',
        border: '1px solid rgba(108,99,255,0.35)',
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 40px rgba(108,99,255,0.15)',
      }}
      transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
      cursor="default"
      minW="90px"
    >
      <Box w="48px" h="48px">
        <img src={icon} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Box>
      <Text
        fontSize="12px"
        fontWeight={600}
        color="#475569"
        fontFamily="'JetBrains Mono','Fira Code',monospace"
        whiteSpace="nowrap"
      >
        {name}
      </Text>
    </Flex>
  );
}

function GroupLabel({ label }: { label: string }) {
  return (
    <Flex align="center" gap="12px" mb="20px">
      <Box h="1px" flex={1} bg="rgba(108,99,255,0.12)" />
      <Text
        fontSize="11px"
        fontWeight={700}
        color="#6c63ff"
        letterSpacing="2px"
        textTransform="uppercase"
        fontFamily="'JetBrains Mono','Fira Code',monospace"
      >
        {label}
      </Text>
      <Box h="1px" flex={1} bg="rgba(108,99,255,0.12)" />
    </Flex>
  );
}

export default function StacksTools() {
  return (
    <Box
      id="stacks-tools"
      py={{ base: '80px', md: '120px' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background glows */}
      <Box position="absolute" w="700px" h="700px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)"
        top="50%" left="50%" transform="translate(-50%,-50%)"
        filter="blur(120px)" pointerEvents="none" />
      <Box position="absolute" w="400px" h="400px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)"
        bottom="-10%" right="-5%" filter="blur(90px)" pointerEvents="none" />

      <Box maxW="1200px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Header */}
        <Flex direction="column" align="center" textAlign="center" mb="64px" gap="16px">
          <Badge
            px="20px" py="6px" borderRadius="50px"
            bg="rgba(255,255,255,0.9)" border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff" fontSize="12px" fontWeight={600}
            letterSpacing="2px" textTransform="uppercase"
          >
            🚀 Stacks & Tools
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }} fontWeight={800}
            color="#1a1a3e" lineHeight={1.2} letterSpacing="-1px"
          >
            Tecnologias que{' '}
            <Box as="span" className="gradient-text">utilizamos</Box>
          </Heading>
          <Text fontSize="17px" color="#64748b" maxW="520px" lineHeight={1.7}>
            Ferramentas modernas escolhidas para entregar software rápido, seguro e escalável.
          </Text>
        </Flex>

        {/* Front-end */}
        <Box mb="48px">
          <GroupLabel label="Front-end" />
          <Flex gap="12px" flexWrap="wrap" justify="center">
            {frontend.map((t) => <TechIcon key={t.name} {...t} />)}
          </Flex>
        </Box>

        {/* Back-end */}
        <Box mb="48px">
          <GroupLabel label="Back-end" />
          <Flex gap="12px" flexWrap="wrap" justify="center">
            {backend.map((t) => <TechIcon key={t.name} {...t} />)}
          </Flex>
        </Box>

        {/* Tools */}
        <Box>
          <GroupLabel label="Tools" />
          <Flex gap="12px" flexWrap="wrap" justify="center">
            {tools.map((t) => <TechIcon key={t.name} {...t} />)}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
