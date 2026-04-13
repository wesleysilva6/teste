import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

const techs = [
  { name: 'TypeScript', icon: 'bi-filetype-tsx', color: '#3178c6', bg: 'rgba(49,120,198,0.1)' },
  { name: 'React',      icon: 'bi-arrow-repeat',  color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Node.js',    icon: 'bi-server',         color: '#3c873a', bg: 'rgba(60,135,58,0.1)'  },
  { name: 'Python',     icon: 'bi-filetype-py',    color: '#f7c948', bg: 'rgba(247,201,72,0.1)' },
  { name: 'Docker',     icon: 'bi-box-seam-fill',  color: '#2496ed', bg: 'rgba(36,150,237,0.1)' },
  { name: 'PostgreSQL', icon: 'bi-database-fill',  color: '#336791', bg: 'rgba(51,103,145,0.1)' },
  { name: 'GraphQL',    icon: 'bi-diagram-3-fill', color: '#e10098', bg: 'rgba(225,0,152,0.1)'  },
  { name: 'Redis',      icon: 'bi-hdd-fill',        color: '#dc2626', bg: 'rgba(220,38,38,0.1)'  },
  { name: 'AWS',        icon: 'bi-cloud-fill',      color: '#ff9900', bg: 'rgba(255,153,0,0.1)'  },
  { name: 'Git',        icon: 'bi-git',             color: '#f05032', bg: 'rgba(240,80,50,0.1)'  },
  { name: 'Linux',      icon: 'bi-terminal-fill',   color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  { name: 'Kubernetes', icon: 'bi-layers-fill',     color: '#326ce5', bg: 'rgba(50,108,229,0.1)' },
];

// Duplicate list for seamless marquee loop
const marqueeList = [...techs, ...techs];

const languages = [
  { name: 'JavaScript', snippet: 'const fn = () => {};',   color: '#fbbf24' },
  { name: 'Python',     snippet: 'def solve(x): return x', color: '#34d399' },
  { name: 'TypeScript', snippet: 'type T = Promise<void>;', color: '#60a5fa' },
  { name: 'Rust',       snippet: 'fn main() { println!() }', color: '#f97316' },
];

export default function TechStack() {
  return (
    <Box id="tech-stack" py={{ base: '80px', md: '120px' }} position="relative" overflow="hidden">
      {/* Background glow */}
      <Box
        position="absolute"
        w="700px"
        h="700px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Section header */}
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
            &lt;/&gt; Nossa Stack
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={800}
            color="#1a1a3e"
            lineHeight={1.2}
            letterSpacing="-1px"
          >
            Tecnologias que{' '}
            <Box as="span" className="gradient-text">dominamos</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Nossa equipe utiliza as melhores ferramentas e linguagens do mercado para entregar software de alta qualidade.
          </Text>
        </Flex>

        {/* Code snippet language cards */}
        <Flex
          gap="16px"
          flexWrap="wrap"
          justify="center"
          mb="64px"
        >
          {languages.map((lang) => (
            <Box
              key={lang.name}
              p="0"
              borderRadius="14px"
              overflow="hidden"
              border="1px solid rgba(108,99,255,0.12)"
              bg="rgba(255,255,255,0.9)"
              minW="220px"
              flex="1"
              maxW="280px"
              className="tech-badge"
              boxShadow="0 4px 20px rgba(108,99,255,0.05)"
            >
              {/* Title bar */}
              <Flex
                align="center"
                gap="8px"
                px="14px"
                py="9px"
                bg="#161b22"
                borderBottom="1px solid rgba(255,255,255,0.06)"
              >
                <Box w="10px" h="10px" borderRadius="50%" bg="#ff5f57" flexShrink={0} />
                <Box w="10px" h="10px" borderRadius="50%" bg="#febc2e" flexShrink={0} />
                <Box w="10px" h="10px" borderRadius="50%" bg="#28c840" flexShrink={0} />
                <Text
                  ml="6px"
                  fontFamily="'JetBrains Mono','Fira Code',monospace"
                  fontSize="11px"
                  color="#6e7681"
                >
                  {lang.name.toLowerCase()}.{lang.name === 'Python' ? 'py' : lang.name === 'Rust' ? 'rs' : 'ts'}
                </Text>
              </Flex>
              {/* Code body */}
              <Box
                px="16px"
                py="14px"
                bg="#0d1117"
              >
                <Text
                  fontFamily="'JetBrains Mono','Fira Code',monospace"
                  fontSize="12.5px"
                  color={lang.color}
                  lineHeight={1.6}
                  whiteSpace="pre"
                >
                  {lang.snippet}
                </Text>
                <Box
                  display="inline-block"
                  w="2px"
                  h="13px"
                  bg="#00e5ff"
                  ml="2px"
                  verticalAlign="text-bottom"
                  className="typing-cursor"
                />
              </Box>
            </Box>
          ))}
        </Flex>

        {/* Marquee of tech badges */}
        <Box overflow="hidden" py="8px">
          <Box className="tech-marquee-track">
            {marqueeList.map((tech, i) => (
              <Flex
                key={`${tech.name}-${i}`}
                align="center"
                gap="10px"
                px="20px"
                py="12px"
                borderRadius="50px"
                bg="rgba(255,255,255,0.92)"
                border="1px solid rgba(108,99,255,0.1)"
                boxShadow="0 2px 12px rgba(108,99,255,0.06)"
                flexShrink={0}
                className="tech-badge"
                style={{ minWidth: 'max-content' }}
              >
                <Flex
                  w="32px"
                  h="32px"
                  borderRadius="8px"
                  bg={tech.bg}
                  align="center"
                  justify="center"
                  color={tech.color}
                  flexShrink={0}
                >
                  <i className={`bi ${tech.icon}`} style={{ fontSize: '16px' }} />
                </Flex>
                <Text fontWeight={600} fontSize="14px" color="#1a1a3e" whiteSpace="nowrap">
                  {tech.name}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
