import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Text, Badge, SimpleGrid } from '@chakra-ui/react';

const stats = [
  {
    label: 'Projetos entregues',
    value: 120,
    suffix: '+',
    icon: 'bi-rocket-takeoff-fill',
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.08)',
    cmd: '$ deploy --projects',
  },
  {
    label: 'Linhas de código',
    value: 2400,
    suffix: 'k+',
    icon: 'bi-code-square',
    color: '#00e5ff',
    bg: 'rgba(0,229,255,0.08)',
    cmd: '$ git log --all',
  },
  {
    label: 'Uptime garantido',
    value: 99,
    suffix: '.9%',
    icon: 'bi-activity',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    cmd: '$ status --uptime',
  },
  {
    label: 'Clientes ativos',
    value: 48,
    suffix: '+',
    icon: 'bi-people-fill',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    cmd: '$ clients --active',
  },
  {
    label: 'Pull Requests',
    value: 3700,
    suffix: '+',
    icon: 'bi-git',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.08)',
    cmd: '$ git pr --merged',
  },
  {
    label: 'Stack coverage',
    value: 100,
    suffix: '%',
    icon: 'bi-shield-check',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    cmd: '$ test --coverage',
  },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 1600, active);
  return (
    <Box
      p="0"
      borderRadius="16px"
      overflow="hidden"
      border="1px solid rgba(108,99,255,0.12)"
      bg="rgba(255,255,255,0.92)"
      boxShadow="0 4px 20px rgba(108,99,255,0.05)"
      _hover={{ transform: 'translateY(-6px)', boxShadow: `0 16px 40px ${stat.color}20`, borderColor: `${stat.color}40` }}
      transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
    >
      {/* Terminal title bar */}
      <Flex
        align="center"
        gap="6px"
        px="14px"
        py="9px"
        bg="#161b22"
        borderBottom="1px solid rgba(255,255,255,0.05)"
      >
        <Box w="10px" h="10px" borderRadius="50%" bg="#ff5f57" flexShrink={0} />
        <Box w="10px" h="10px" borderRadius="50%" bg="#febc2e" flexShrink={0} />
        <Box w="10px" h="10px" borderRadius="50%" bg="#28c840" flexShrink={0} />
        <Text
          ml="6px"
          fontFamily="'JetBrains Mono','Fira Code',monospace"
          fontSize="11px"
          color="#6e7681"
          flex={1}
        >
          {stat.cmd}
        </Text>
      </Flex>

      {/* Content */}
      <Box p="28px 24px" bg="rgba(255,255,255,0.97)">
        <Flex align="center" gap="14px" mb="16px">
          <Flex
            w="44px"
            h="44px"
            borderRadius="12px"
            bg={stat.bg}
            color={stat.color}
            align="center"
            justify="center"
            flexShrink={0}
          >
            <i className={`bi ${stat.icon}`} style={{ fontSize: '20px' }} />
          </Flex>
          <Text
            fontSize={{ base: '36px', md: '42px' }}
            fontWeight={900}
            color="#1a1a3e"
            lineHeight={1}
            fontFamily="'JetBrains Mono','Fira Code',monospace"
            letterSpacing="-2px"
          >
            {count.toLocaleString()}
            <Box as="span" fontSize="20px" color={stat.color} letterSpacing="0px">
              {stat.suffix}
            </Box>
          </Text>
        </Flex>
        <Text fontSize="14px" fontWeight={600} color="#64748b">
          {stat.label}
        </Text>
      </Box>
    </Box>
  );
}

export default function DevStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="dev-stats"
      py={{ base: '80px', md: '120px' }}
      bg="#f0f0fa"
      position="relative"
      overflow="hidden"
      ref={ref as any}
    >
      {/* Background glow */}
      <Box
        position="absolute"
        w="600px"
        h="600px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Header */}
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
            {'>'} $ ./metrics.sh
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={800}
            color="#1a1a3e"
            lineHeight={1.2}
            letterSpacing="-1px"
          >
            Números que{' '}
            <Box as="span" className="gradient-text">falam por si</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Dados reais de execução — sem marketing, só performance.
          </Text>
        </Flex>

        {/* Stats grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="24px">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
