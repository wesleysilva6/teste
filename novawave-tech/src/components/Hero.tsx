import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const codeLines = [
  { key: 'c1', html: <><span className="c-comment">// novawave.config.ts</span></> },
  { key: 'blank1', html: null },
  { key: 'c2', html: <><span className="c-keyword">const</span> <span className="c-var">app</span> <span className="c-punct">=</span> <span className="c-fn">nova</span><span className="c-punct">.</span><span className="c-fn">createApp</span><span className="c-punct">{'({'}</span></> },
  { key: 'c3', html: <>&nbsp;&nbsp;<span className="c-prop">ai</span><span className="c-punct">:</span> <span className="c-punct">{'{'}</span> <span className="c-prop">model</span><span className="c-punct">:</span> <span className="c-string">'nova-v4'</span><span className="c-punct">,</span> <span className="c-prop">auto</span><span className="c-punct">:</span> <span className="c-bool">true</span> <span className="c-punct">{'}'}</span><span className="c-punct">,</span></> },
  { key: 'c4', html: <>&nbsp;&nbsp;<span className="c-prop">cloud</span><span className="c-punct">:</span> <span className="c-string">'scalable'</span><span className="c-punct">,</span></> },
  { key: 'c5', html: <>&nbsp;&nbsp;<span className="c-prop">security</span><span className="c-punct">:</span> <span className="c-string">'24/7'</span><span className="c-punct">,</span></> },
  { key: 'c6', html: <>&nbsp;&nbsp;<span className="c-prop">performance</span><span className="c-punct">:</span> <span className="c-num">100</span><span className="c-punct">,</span></> },
  { key: 'c7', html: <><span className="c-punct">{'}'}</span><span className="c-punct">)</span><span className="c-punct">;</span></> },
  { key: 'blank2', html: null },
  { key: 'c8', html: <><span className="c-keyword">await</span> <span className="c-var">app</span><span className="c-punct">.</span><span className="c-fn">launch</span><span className="c-punct">()</span><span className="c-punct">;</span></> },
  { key: 'c9', html: <><span className="c-comment">// ✅ Sistema online — pronto para escalar</span></> },
];

const codeChars = [
  { char: '{ }', top: '15%', left: '5%',  size: '18px', delay: '0s',  dur: '12s' },
  { char: '</>', top: '70%', left: '8%',  size: '16px', delay: '3s',  dur: '15s' },
  { char: '=>',  top: '35%', left: '2%',  size: '14px', delay: '6s',  dur: '11s' },
  { char: '()',  top: '80%', left: '92%', size: '16px', delay: '1s',  dur: '13s' },
  { char: '[]',  top: '20%', left: '88%', size: '14px', delay: '4s',  dur: '10s' },
  { char: '/*',  top: '55%', left: '95%', size: '13px', delay: '7s',  dur: '14s' },
  { char: '01',  top: '10%', left: '50%', size: '12px', delay: '2s',  dur: '16s' },
  { char: '#!',  top: '60%', left: '45%', size: '13px', delay: '9s',  dur: '12s' },
  { char: ';;',  top: '88%', left: '60%', size: '15px', delay: '5s',  dur: '18s' },
  { char: '::',  top: '42%', left: '15%', size: '13px', delay: '8s',  dur: '11s' },
];

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

      {/* Floating code characters */}
      <Box className="floating-code-chars">
        {codeChars.map((c) => (
          <span
            key={c.char + c.top}
            style={{
              top: c.top,
              left: c.left,
              fontSize: c.size,
              animationDelay: c.delay,
              animationDuration: c.dur,
            }}
          >
            {c.char}
          </span>
        ))}
      </Box>

      <Box maxW="1400px" mx="auto" position="relative" zIndex={1} pt={{ base: '140px', md: '160px' }} pb="40px" px={{ base: '20px', md: '48px' }} flex={1}>
        <Flex
          direction={{ base: 'column', xl: 'row' }}
          align="center"
          justify="center"
          gap={{ base: '48px', xl: '80px' }}
        >
          {/* Left: text content */}
          <Flex
            direction="column"
            align={{ base: 'center', xl: 'flex-start' }}
            textAlign={{ base: 'center', xl: 'left' }}
            gap="28px"
            flex={1}
            maxW={{ base: '100%', xl: '600px' }}
          >
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
          <Flex gap="16px" flexWrap="wrap" justify={{ base: 'center', xl: 'flex-start' }} mt="8px" className="hero-cta-animate">
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

          {/* Stats strip */}
          <Flex
            gap={{ base: '20px', md: '32px' }}
            flexWrap="wrap"
            justify={{ base: 'center', xl: 'flex-start' }}
            mt="12px"
            className="hero-trusted-animate"
          >
            {[
              { num: '3',      label: 'Sistemas entregues' },
              { num: '99.9%',  label: 'Uptime garantido'   },
              { num: '<40ms',  label: 'Latencia media'      },
              { num: '100%',   label: 'Satisfacao'          },
            ].map((s) => (
              <Flex key={s.label} direction="column" align={{ base: 'center', xl: 'flex-start' }} gap="2px">
                <Box
                  fontSize={{ base: '22px', md: '26px' }}
                  fontWeight={900}
                  fontFamily="'JetBrains Mono',monospace"
                  className="gradient-text"
                  lineHeight={1}
                >
                  {s.num}
                </Box>
                <Box fontSize="12px" color="#94a3b8" fontWeight={500} letterSpacing="0.3px">
                  {s.label}
                </Box>
              </Flex>
            ))}
          </Flex>
          </Flex>

          {/* Right: Code window (desktop only) */}
          <Box display={{ base: 'none', xl: 'block' }} flex={{ xl: '0 0 auto' }}>
            <div className="code-window">
              <div className="code-window-titlebar">
                <span className="code-dot dot-red" />
                <span className="code-dot dot-yellow" />
                <span className="code-dot dot-green" />
                <span className="code-window-fname">novawave.config.ts</span>
              </div>
              <div className="code-body">
                {codeLines.map((line) => (
                  <span key={line.key} className="code-line">
                    {line.html ?? <>&nbsp;</>}
                  </span>
                ))}
                <span className="code-line">
                  <span className="typing-cursor" />
                </span>
              </div>
            </div>
          </Box>
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
