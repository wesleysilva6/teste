import { useState } from 'react';
import { Box, Flex, Heading, Text, Badge } from '@chakra-ui/react';

const tabs = [
  {
    label: 'API REST',
    file: 'routes/users.ts',
    lang: 'TypeScript',
    lines: [
      { t: 'comment', v: '// Endpoint de criação de usuário com validação' },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-keyword">import</span> <span className="c-punct">{'{'}</span> <span className="c-prop">Router</span><span className="c-punct">,</span> <span className="c-prop">Request</span><span className="c-punct">,</span> <span className="c-prop">Response</span> <span className="c-punct">{'}'}</span> <span className="c-keyword">from</span> <span className="c-string">'express'</span><span className="c-punct">;</span></> },
      { t: 'code', v: <><span className="c-keyword">import</span> <span className="c-punct">{'{'}</span> <span className="c-prop">validateUser</span><span className="c-punct">,</span> <span className="c-prop">hashPassword</span> <span className="c-punct">{'}'}</span> <span className="c-keyword">from</span> <span className="c-string">'../lib/auth'</span><span className="c-punct">;</span></> },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-keyword">const</span> <span className="c-var">router</span> <span className="c-punct">=</span> <span className="c-fn">Router</span><span className="c-punct">();</span></> },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-var">router</span><span className="c-punct">.</span><span className="c-fn">post</span><span className="c-punct">{'('}</span><span className="c-string">'/users'</span><span className="c-punct">,</span> <span className="c-keyword">async</span> <span className="c-punct">{'('}</span><span className="c-var">req</span><span className="c-punct">:</span> <span className="c-prop">Request</span><span className="c-punct">,</span> <span className="c-var">res</span><span className="c-punct">:</span> <span className="c-prop">Response</span><span className="c-punct">{') =>'}</span> <span className="c-punct">{'{'}</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-punct">{'{'}</span> <span className="c-var">name</span><span className="c-punct">,</span> <span className="c-var">email</span><span className="c-punct">,</span> <span className="c-var">password</span> <span className="c-punct">{'}'}</span> <span className="c-punct">=</span> <span className="c-var">req</span><span className="c-punct">.</span><span className="c-prop">body</span><span className="c-punct">;</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-var">valid</span> <span className="c-punct">=</span> <span className="c-fn">validateUser</span><span className="c-punct">{'({'}</span> <span className="c-var">name</span><span className="c-punct">,</span> <span className="c-var">email</span><span className="c-punct">,</span> <span className="c-var">password</span> <span className="c-punct">{'}'});</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-keyword">if</span> <span className="c-punct">{'(!'}</span><span className="c-var">valid</span><span className="c-punct">)</span> <span className="c-keyword">return</span> <span className="c-var">res</span><span className="c-punct">.</span><span className="c-fn">status</span><span className="c-punct">{'('}</span><span className="c-num">400</span><span className="c-punct">{')'}</span><span className="c-punct">.</span><span className="c-fn">json</span><span className="c-punct">({'({'}</span> <span className="c-prop">error</span><span className="c-punct">:</span> <span className="c-string">'Invalid data'</span> <span className="c-punct">{'}'});</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-var">hash</span> <span className="c-punct">=</span> <span className="c-keyword">await</span> <span className="c-fn">hashPassword</span><span className="c-punct">{'('}</span><span className="c-var">password</span><span className="c-punct">{')'}</span><span className="c-punct">;</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-var">res</span><span className="c-punct">.</span><span className="c-fn">status</span><span className="c-punct">{'('}</span><span className="c-num">201</span><span className="c-punct">{')'}</span><span className="c-punct">.</span><span className="c-fn">json</span><span className="c-punct">({'({'}</span> <span className="c-prop">name</span><span className="c-punct">,</span> <span className="c-prop">email</span><span className="c-punct">,</span> <span className="c-var">hash</span> <span className="c-punct">{'}'});</span></> },
      { t: 'code', v: <><span className="c-punct">{'}'});</span></> },
    ],
  },
  {
    label: 'IA / ML',
    file: 'nova_ai/predict.py',
    lang: 'Python',
    lines: [
      { t: 'comment', v: '# Modelo preditivo com scikit-learn' },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-keyword">from</span> <span className="c-prop">sklearn.pipeline</span> <span className="c-keyword">import</span> <span className="c-prop">Pipeline</span></> },
      { t: 'code', v: <><span className="c-keyword">from</span> <span className="c-prop">sklearn.preprocessing</span> <span className="c-keyword">import</span> <span className="c-prop">StandardScaler</span></> },
      { t: 'code', v: <><span className="c-keyword">from</span> <span className="c-prop">sklearn.ensemble</span> <span className="c-keyword">import</span> <span className="c-prop">GradientBoostingClassifier</span></> },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-keyword">def</span> <span className="c-fn">build_model</span><span className="c-punct">():</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">return</span> <span className="c-fn">Pipeline</span><span className="c-punct">([</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">(</span><span className="c-string">'scaler'</span><span className="c-punct">,</span> <span className="c-fn">StandardScaler</span><span className="c-punct">()),</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">(</span><span className="c-string">'clf'</span><span className="c-punct">,</span> <span className="c-fn">GradientBoostingClassifier</span><span className="c-punct">(</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">n_estimators</span><span className="c-punct">=</span><span className="c-num">200</span><span className="c-punct">,</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">learning_rate</span><span className="c-punct">=</span><span className="c-num">0.05</span><span className="c-punct">,</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">max_depth</span><span className="c-punct">=</span><span className="c-num">4</span><span className="c-punct">,</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">)),</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">])</span></> },
    ],
  },
  {
    label: 'Infra / Cloud',
    file: 'docker-compose.yml',
    lang: 'YAML',
    lines: [
      { t: 'comment', v: '# Stack completa em containers' },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-prop">services</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-prop">api</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">image</span><span className="c-punct">:</span> <span className="c-string">novawave/api:latest</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">ports</span><span className="c-punct">:</span> <span className="c-punct">[</span><span className="c-string">"3000:3000"</span><span className="c-punct">]</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">environment</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">NODE_ENV</span><span className="c-punct">:</span> <span className="c-string">production</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">DATABASE_URL</span><span className="c-punct">:</span> <span className="c-string">${'${DB_URL}'}</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-prop">db</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">image</span><span className="c-punct">:</span> <span className="c-string">postgres:16-alpine</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">volumes</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">-</span> <span className="c-string">pgdata:/var/lib/postgresql/data</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-prop">nginx</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">image</span><span className="c-punct">:</span> <span className="c-string">nginx:stable-alpine</span></> },
    ],
  },
  {
    label: 'CI/CD',
    file: '.github/workflows/deploy.yml',
    lang: 'YAML',
    lines: [
      { t: 'comment', v: '# Pipeline de deploy contínuo' },
      { t: 'blank' },
      { t: 'code', v: <><span className="c-prop">name</span><span className="c-punct">:</span> <span className="c-string">Deploy to Production</span></> },
      { t: 'code', v: <><span className="c-keyword">on</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-prop">push</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">branches</span><span className="c-punct">:</span> <span className="c-punct">[</span><span className="c-string">main</span><span className="c-punct">]</span></> },
      { t: 'code', v: <><span className="c-prop">jobs</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;<span className="c-prop">deploy</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">runs-on</span><span className="c-punct">:</span> <span className="c-string">ubuntu-latest</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">steps</span><span className="c-punct">:</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">-</span> <span className="c-prop">uses</span><span className="c-punct">:</span> <span className="c-string">actions/checkout@v4</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">-</span> <span className="c-prop">name</span><span className="c-punct">:</span> <span className="c-string">Build & push image</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">run</span><span className="c-punct">:</span> <span className="c-string">docker build -t novawave/api .</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punct">-</span> <span className="c-prop">name</span><span className="c-punct">:</span> <span className="c-string">Deploy via SSH</span></> },
      { t: 'code', v: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">run</span><span className="c-punct">:</span> <span className="c-string">./scripts/deploy.sh</span></> },
    ],
  },
];

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#f7c948',
  YAML: '#34d399',
};

export default function CodeShowcase() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Box
      id="code-showcase"
      py={{ base: '80px', md: '120px' }}
      bg="#f0f0fa"
      position="relative"
      overflow="hidden"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        w="700px"
        h="700px"
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
            {'</'} Código
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={800}
            color="#1a1a3e"
            lineHeight={1.2}
            letterSpacing="-1px"
          >
            O que{' '}
            <Box as="span" className="gradient-text">desenvolvemos</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="560px" lineHeight={1.7}>
            Exemplos reais das tecnologias que usamos no dia a dia para construir nossas soluções.
          </Text>
        </Flex>

        {/* Editor window */}
        <Box maxW="900px" mx="auto">
          <Box
            borderRadius="16px"
            overflow="hidden"
            border="1px solid rgba(108,99,255,0.2)"
            boxShadow="0 30px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(108,99,255,0.06)"
          >
            {/* VS Code-style titlebar with traffic lights + tab row */}
            <Box bg="#1e1e2e" borderBottom="1px solid rgba(255,255,255,0.06)">
              <Flex align="center" gap="7px" px="16px" pt="12px" pb="0">
                <Box w="12px" h="12px" borderRadius="50%" bg="#ff5f57" flexShrink={0} />
                <Box w="12px" h="12px" borderRadius="50%" bg="#febc2e" flexShrink={0} />
                <Box w="12px" h="12px" borderRadius="50%" bg="#28c840" flexShrink={0} />

                {/* Tabs */}
                <Flex ml="16px" gap="2px" overflow="auto">
                  {tabs.map((t, i) => (
                    <Box
                      key={t.label}
                      px="16px"
                      py="8px"
                      borderRadius="6px 6px 0 0"
                      bg={active === i ? '#0d1117' : 'transparent'}
                      color={active === i ? '#e6edf3' : '#6e7681'}
                      fontSize="12px"
                      fontWeight={active === i ? 600 : 400}
                      fontFamily="'JetBrains Mono','Fira Code',monospace"
                      cursor="pointer"
                      onClick={() => setActive(i)}
                      borderBottom={active === i ? '2px solid #6c63ff' : '2px solid transparent'}
                      transition="all 0.2s"
                      whiteSpace="nowrap"
                      _hover={{ color: '#e6edf3' }}
                    >
                      {t.label}
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>

            {/* File path bar */}
            <Flex
              align="center"
              gap="10px"
              px="20px"
              py="8px"
              bg="#161b22"
              borderBottom="1px solid rgba(255,255,255,0.04)"
            >
              <Text
                fontFamily="'JetBrains Mono','Fira Code',monospace"
                fontSize="11px"
                color="#6e7681"
              >
                📁 {tab.file}
              </Text>
              <Box
                ml="auto"
                px="8px"
                py="2px"
                borderRadius="4px"
                bg="rgba(108,99,255,0.15)"
                border="1px solid rgba(108,99,255,0.2)"
              >
                <Text
                  fontFamily="'JetBrains Mono','Fira Code',monospace"
                  fontSize="10px"
                  color={langColor[tab.lang] ?? '#6c63ff'}
                  fontWeight={600}
                >
                  {tab.lang}
                </Text>
              </Box>
            </Flex>

            {/* Code area */}
            <Box bg="#0d1117" px="0" py="0" overflow="auto">
              <Box
                fontFamily="'JetBrains Mono','Fira Code','Cascadia Code','Courier New',monospace"
                fontSize={{ base: '12px', md: '13px' }}
                lineHeight="2"
                py="20px"
              >
                {tab.lines.map((line, i) => (
                  <Flex key={i} _hover={{ bg: 'rgba(255,255,255,0.03)' }}>
                    {/* Line number */}
                    <Box
                      w="44px"
                      textAlign="right"
                      pr="16px"
                      flexShrink={0}
                      color="#3d4554"
                      userSelect="none"
                      fontSize="12px"
                    >
                      {i + 1}
                    </Box>
                    {/* Code */}
                    <Box flex={1} pr="24px" color={line.t === 'comment' ? '#6e7681' : '#e6edf3'}>
                      {line.t === 'blank' ? (
                        <Box h="1lh">&nbsp;</Box>
                      ) : line.t === 'comment' ? (
                        <Box as="span" fontStyle="italic">{line.v as string}</Box>
                      ) : (
                        line.v
                      )}
                    </Box>
                  </Flex>
                ))}

                {/* Cursor line */}
                <Flex _hover={{ bg: 'rgba(255,255,255,0.03)' }}>
                  <Box w="44px" textAlign="right" pr="16px" flexShrink={0} color="#3d4554" fontSize="12px">
                    {tab.lines.length + 1}
                  </Box>
                  <Box flex={1} pr="24px">
                    <Box
                      display="inline-block"
                      w="2px"
                      h="1em"
                      bg="#00e5ff"
                      verticalAlign="text-bottom"
                      className="typing-cursor"
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Status bar */}
            <Flex
              align="center"
              gap="16px"
              px="16px"
              py="5px"
              bg="#6c63ff"
              fontSize="11px"
              fontFamily="'JetBrains Mono','Fira Code',monospace"
              color="rgba(255,255,255,0.85)"
            >
              <Flex align="center" gap="5px">
                <i className="bi bi-git" />
                <span>main</span>
              </Flex>
              <Flex align="center" gap="5px">
                <i className="bi bi-check-circle-fill" />
                <span>0 erros</span>
              </Flex>
              <Flex align="center" gap="5px">
                <i className="bi bi-exclamation-triangle" />
                <span>0 avisos</span>
              </Flex>
              <Box ml="auto">
                <span>{tab.lang} · UTF-8 · LF</span>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
