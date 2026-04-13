import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

const commits = [
  { hash: 'a3f9d1c', msg: 'feat(ai): adiciona modelo preditivo v4 com 98% de precisão', branch: 'main', author: 'Lucas F.', time: '2 min atrás', color: '#34d399' },
  { hash: 'b72e4a8', msg: 'fix(api): corrige race condition no endpoint de autenticação', branch: 'hotfix/auth', author: 'Ana K.', time: '18 min atrás', color: '#f472b6' },
  { hash: 'c190fe3', msg: 'refactor(db): migra queries para Prisma ORM com type safety', branch: 'dev', author: 'Pedro M.', time: '1h atrás', color: '#60a5fa' },
  { hash: 'd55b2e7', msg: 'chore(ci): atualiza pipeline GitHub Actions para Node 22', branch: 'dev', author: 'Lucas F.', time: '3h atrás', color: '#60a5fa' },
  { hash: 'e801c4f', msg: 'feat(cloud): configura auto-scaling no cluster Kubernetes', branch: 'infra', author: 'Mariana S.', time: '5h atrás', color: '#fbbf24' },
  { hash: 'f3a71b2', msg: 'test(api): adiciona testes E2E com Playwright — cobertura 94%', branch: 'main', author: 'Ana K.', time: '8h atrás', color: '#34d399' },
  { hash: '9dc608e', msg: 'docs: atualiza README com guia de deploy e variáveis de ambiente', branch: 'dev', author: 'Pedro M.', time: '1d atrás', color: '#60a5fa' },
];

// Generate a contribution heatmap: 52 weeks × 7 days
function generateHeatmap() {
  const cells: number[] = [];
  for (let i = 0; i < 52 * 7; i++) {
    const rand = Math.random();
    if (rand < 0.35) cells.push(0);
    else if (rand < 0.60) cells.push(1);
    else if (rand < 0.78) cells.push(2);
    else if (rand < 0.90) cells.push(3);
    else cells.push(4);
  }
  // Make the last 14 days denser
  for (let i = cells.length - 14; i < cells.length; i++) {
    cells[i] = Math.min(4, cells[i] + 2);
  }
  return cells;
}

const heatmap = generateHeatmap();

const heatColors = [
  'rgba(108,99,255,0.06)',
  'rgba(108,99,255,0.25)',
  'rgba(108,99,255,0.45)',
  'rgba(108,99,255,0.70)',
  '#6c63ff',
];

const branchColor: Record<string, string> = {
  main:          '#34d399',
  'hotfix/auth': '#f87171',
  dev:           '#60a5fa',
  infra:         '#fbbf24',
};

export default function GitFeed() {
  return (
    <Box
      id="git-feed"
      py={{ base: '80px', md: '120px' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background glows */}
      <Box position="absolute" w="500px" h="500px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.09) 0%, transparent 70%)"
        top="10%" left="-8%" filter="blur(90px)" pointerEvents="none" />
      <Box position="absolute" w="400px" h="400px" borderRadius="50%"
        bg="radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)"
        bottom="10%" right="-5%" filter="blur(80px)" pointerEvents="none" />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
        {/* Header */}
        <Flex direction="column" align="center" textAlign="center" mb="64px" gap="16px">
          <Badge
            px="20px" py="6px" borderRadius="50px"
            bg="rgba(255,255,255,0.9)" border="1px solid rgba(108,99,255,0.2)"
            color="#6c63ff" fontSize="12px" fontWeight={600}
            letterSpacing="2px" textTransform="uppercase"
          >
            git log --oneline
          </Badge>
          <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight={800}
            color="#1a1a3e" lineHeight={1.2} letterSpacing="-1px">
            Nossa{' '}
            <Box as="span" className="gradient-text">atividade de desenvolvimento</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Entregas constantes, código de qualidade e evolução contínua em cada sprint.
          </Text>
        </Flex>

        <Flex direction={{ base: 'column', lg: 'row' }} gap="32px" align="flex-start">
          {/* Left: commit log */}
          <Box flex={1} minW={0}>
            <Box
              borderRadius="16px" overflow="hidden"
              border="1px solid rgba(108,99,255,0.15)"
              boxShadow="0 8px 40px rgba(108,99,255,0.07)"
            >
              {/* Title bar */}
              <Flex align="center" gap="7px" px="16px" py="11px" bg="#161b22"
                borderBottom="1px solid rgba(255,255,255,0.05)">
                <Box w="11px" h="11px" borderRadius="50%" bg="#ff5f57" />
                <Box w="11px" h="11px" borderRadius="50%" bg="#febc2e" />
                <Box w="11px" h="11px" borderRadius="50%" bg="#28c840" />
                <Text ml="10px" fontFamily="'JetBrains Mono','Fira Code',monospace"
                  fontSize="12px" color="#6e7681">
                  $ git log --oneline --graph
                </Text>
              </Flex>

              {/* Commits */}
              {commits.map((c, i) => (
                <Flex
                  key={c.hash}
                  align="flex-start"
                  gap="14px"
                  px="20px"
                  py="14px"
                  bg={i % 2 === 0 ? '#0d1117' : '#0b0f17'}
                  borderBottom="1px solid rgba(255,255,255,0.04)"
                  _hover={{ bg: 'rgba(108,99,255,0.07)' }}
                  transition="background 0.2s"
                >
                  {/* Graph line + dot */}
                  <Flex direction="column" align="center" pt="4px" flexShrink={0}>
                    <Box w="10px" h="10px" borderRadius="50%" bg={c.color} flexShrink={0}
                      boxShadow={`0 0 8px ${c.color}80`} />
                    {i < commits.length - 1 && (
                      <Box w="2px" flex={1} mt="4px" minH="24px"
                        bg="linear-gradient(180deg, rgba(108,99,255,0.3), rgba(108,99,255,0.05))" />
                    )}
                  </Flex>

                  <Box flex={1} minW={0}>
                    <Flex align="center" gap="8px" flexWrap="wrap" mb="4px">
                      <Text
                        fontFamily="'JetBrains Mono','Fira Code',monospace"
                        fontSize="11px" color="#6c63ff" fontWeight={700}
                        bg="rgba(108,99,255,0.1)" px="6px" py="1px" borderRadius="4px"
                        flexShrink={0}
                      >
                        {c.hash}
                      </Text>
                      <Box
                        px="8px" py="1px" borderRadius="20px" flexShrink={0}
                        bg={`${branchColor[c.branch] ?? '#6c63ff'}18`}
                        border={`1px solid ${branchColor[c.branch] ?? '#6c63ff'}40`}
                      >
                        <Text fontFamily="'JetBrains Mono','Fira Code',monospace"
                          fontSize="10px" color={branchColor[c.branch] ?? '#6c63ff'} fontWeight={600}>
                          {c.branch}
                        </Text>
                      </Box>
                    </Flex>
                    <Text fontSize="13.5px" color="#e6edf3" lineHeight={1.5} mb="4px"
                      fontFamily="'JetBrains Mono','Fira Code',monospace">
                      {c.msg}
                    </Text>
                    <Text fontSize="11.5px" color="#6e7681">
                      {c.author} · {c.time}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>

          {/* Right: contribution heatmap + summary */}
          <Flex direction="column" gap="20px" w={{ base: '100%', lg: '360px' }} flexShrink={0}>
            <Box
              borderRadius="16px" overflow="hidden"
              border="1px solid rgba(108,99,255,0.15)"
              boxShadow="0 8px 40px rgba(108,99,255,0.07)"
            >
              <Flex align="center" gap="7px" px="16px" py="11px" bg="#161b22"
                borderBottom="1px solid rgba(255,255,255,0.05)">
                <Box w="11px" h="11px" borderRadius="50%" bg="#ff5f57" />
                <Box w="11px" h="11px" borderRadius="50%" bg="#febc2e" />
                <Box w="11px" h="11px" borderRadius="50%" bg="#28c840" />
                <Text ml="10px" fontFamily="'JetBrains Mono','Fira Code',monospace"
                  fontSize="12px" color="#6e7681">
                  contributions · 2025–2026
                </Text>
              </Flex>

              <Box bg="#0d1117" p="20px">
                {/* Heatmap grid: 7 rows (days), 52 cols (weeks) */}
                <Box
                  display="grid"
                  style={{ gridTemplateRows: 'repeat(7, 11px)', gridTemplateColumns: 'repeat(52, 11px)', gap: '3px' }}
                  overflow="auto"
                >
                  {heatmap.map((level, i) => (
                    <Box
                      key={i}
                      w="11px" h="11px" borderRadius="2px"
                      bg={heatColors[level]}
                      title={`${level} contribuições`}
                    />
                  ))}
                </Box>

                {/* Legend */}
                <Flex align="center" gap="5px" mt="12px" justify="flex-end">
                  <Text fontSize="10px" color="#6e7681" fontFamily="monospace">Menos</Text>
                  {heatColors.map((c) => (
                    <Box key={c} w="11px" h="11px" borderRadius="2px" bg={c} />
                  ))}
                  <Text fontSize="10px" color="#6e7681" fontFamily="monospace">Mais</Text>
                </Flex>
              </Box>
            </Box>

            {/* Quick stats strip */}
            {[
              { icon: 'bi-git', label: 'Commits / mês', val: '340+', color: '#6c63ff' },
              { icon: 'bi-check2-circle', label: 'PRs mesclados', val: '98%', color: '#34d399' },
              { icon: 'bi-shield-check', label: 'Code review', val: '100%', color: '#00e5ff' },
            ].map((s) => (
              <Flex
                key={s.label} align="center" gap="14px" p="16px 20px"
                borderRadius="14px" bg="rgba(255,255,255,0.92)"
                border="1px solid rgba(108,99,255,0.1)"
                boxShadow="0 4px 16px rgba(108,99,255,0.05)"
                _hover={{ transform: 'translateX(4px)', borderColor: `${s.color}40` }}
                transition="all 0.25s"
              >
                <Flex w="38px" h="38px" borderRadius="10px" bg={`${s.color}15`}
                  color={s.color} align="center" justify="center" flexShrink={0}>
                  <i className={`bi ${s.icon}`} style={{ fontSize: '17px' }} />
                </Flex>
                <Box flex={1}>
                  <Text fontSize="13px" color="#64748b">{s.label}</Text>
                  <Text fontSize="20px" fontWeight={800} color="#1a1a3e"
                    fontFamily="'JetBrains Mono','Fira Code',monospace" lineHeight={1.2}>
                    {s.val}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
