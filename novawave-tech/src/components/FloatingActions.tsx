import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [hoverWa, setHoverWa] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="28px"
      right="24px"
      zIndex={999}
      display="flex"
      flexDirection="column"
      gap="10px"
      alignItems="flex-end"
    >
      {/* Back to top */}
      <Box
        asChild
        w="44px"
        h="44px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.95)"
        border="1px solid rgba(108,99,255,0.2)"
        color="#6c63ff"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 20px rgba(108,99,255,0.18)"
        _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 28px rgba(108,99,255,0.35)' }}
        transition="all 0.3s ease"
        opacity={showTop ? 1 : 0}
        pointerEvents={showTop ? 'auto' : 'none'}
        style={{ transitionProperty: 'opacity, transform, box-shadow' }}
        title="Voltar ao topo"
      >
        <a href="#hero" aria-label="Voltar ao topo">
          <i className="bi bi-chevron-up" style={{ fontSize: '18px' }} />
        </a>
      </Box>

      {/* WhatsApp */}
      <Flex
        align="center"
        gap="10px"
        onMouseEnter={() => setHoverWa(true)}
        onMouseLeave={() => setHoverWa(false)}
      >
        {/* Tooltip */}
        <Box
          bg="white"
          color="#1a1a3e"
          px="14px"
          py="8px"
          borderRadius="10px"
          fontSize="13px"
          fontWeight={600}
          boxShadow="0 4px 20px rgba(0,0,0,0.08)"
          border="1px solid rgba(108,99,255,0.1)"
          whiteSpace="nowrap"
          opacity={hoverWa ? 1 : 0}
          transform={hoverWa ? 'translateX(0)' : 'translateX(8px)'}
          transition="all 0.25s ease"
          pointerEvents="none"
        >
          Fale conosco! 💬
        </Box>

        {/* WhatsApp button */}
        <Box
          asChild
          w="56px"
          h="56px"
          borderRadius="50%"
          bg="linear-gradient(135deg, #25d366, #128c7e)"
          color="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 4px 24px rgba(37,211,102,0.45)"
          _hover={{ transform: 'scale(1.1)', boxShadow: '0 8px 32px rgba(37,211,102,0.6)' }}
          transition="all 0.3s ease"
        >
          <a href="https://wa.me/5544997422772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bi bi-whatsapp" style={{ fontSize: '26px' }} />
          </a>
        </Box>
      </Flex>
    </Box>
  );
}
