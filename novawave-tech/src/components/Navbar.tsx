import { useState, useEffect } from 'react';
import logoImg from '../assets/Logo futurista NovaWave Tech.png';
import { Box, Flex, HStack, Text, IconButton, VStack } from '@chakra-ui/react';

const links = [
  { label: 'Produtos', href: '#products', id: 'products' },
  { label: 'Como Funciona', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Equipe', href: '#team', id: 'team' },
  { label: 'Contato', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'products', 'how-it-works', 'team', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.75)'}
      backdropFilter="blur(20px)"
      borderBottom={scrolled ? '1px solid rgba(108,99,255,0.18)' : '1px solid transparent'}
      boxShadow={scrolled ? '0 2px 24px rgba(108,99,255,0.08)' : 'none'}
      transition="all 0.4s ease"
      py={scrolled ? '10px' : '16px'}
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: '20px', md: '48px' }}
        align="center"
        justify="space-between"
      >
        <Box asChild>
          <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              src={logoImg}
              alt="NovaWave Tech"
              style={{
                height: '36px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transform: 'scale(1.7)',
                transformOrigin: 'left center',
                marginRight: '60px',
              }}
            />
          </a>
        </Box>

        <HStack gap="32px" display={{ base: 'none', md: 'flex' }}>
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <Text
                asChild
                key={l.label}
                fontSize="14px"
                fontWeight={isActive ? 700 : 500}
                color={isActive ? '#6c63ff' : '#64748b'}
                position="relative"
                _hover={{ color: '#1a1a3e' }}
                transition="color 0.3s"
              >
                <a href={l.href}>
                  {l.label}
                  {isActive && (
                    <Box
                      position="absolute"
                      bottom="-4px"
                      left={0}
                      right={0}
                      h="2px"
                      borderRadius="2px"
                      bg="linear-gradient(90deg, #6c63ff, #00e5ff)"
                    />
                  )}
                </a>
              </Text>
            );
          })}
          <Box
            asChild
            px="28px"
            py="10px"
            borderRadius="50px"
            bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
            color="#fff"
            fontWeight={600}
            fontSize="14px"
            boxShadow="0 2px 15px rgba(108,99,255,0.3)"
            _hover={{ transform: 'translateY(-1px)', boxShadow: '0 4px 20px rgba(108,99,255,0.5)' }}
            transition="all 0.3s"
          >
            <a href="#contact">Fale Conosco</a>
          </Box>
        </HStack>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Menu"
          variant="ghost"
          color="#1a1a3e"
          onClick={() => setOpen(!open)}
          size="sm"
        >
          {open ? <i className="bi bi-x-lg" style={{ fontSize: '22px' }} /> : <i className="bi bi-list" style={{ fontSize: '22px' }} />}
        </IconButton>
      </Flex>

      {open && (
        <VStack
          display={{ base: 'flex', md: 'none' }}
          pb="28px"
          pt="12px"
          gap="18px"
          bg="rgba(255, 255, 255, 0.98)"
          borderBottom="1px solid rgba(108,99,255,0.1)"
        >
          {links.map((l) => (
            <Text
              asChild
              key={l.label}
              fontSize="16px"
              fontWeight={activeSection === l.id ? 700 : 500}
              color={activeSection === l.id ? '#6c63ff' : '#64748b'}
              _hover={{ color: '#1a1a3e' }}
            >
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </Text>
          ))}
          <Box
            asChild
            px="28px"
            py="10px"
            borderRadius="50px"
            bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
            color="#fff"
            fontWeight={600}
            fontSize="14px"
          >
            <a href="#contact" onClick={() => setOpen(false)}>Fale Conosco</a>
          </Box>
        </VStack>
      )}
    </Box>
  );
}
