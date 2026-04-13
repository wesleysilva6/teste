import { Box, Flex, Text, SimpleGrid, Badge } from '@chakra-ui/react';
import logoImg from '../assets/Logo futurista NovaWave Tech.png';

const footerLinks = [
  {
    title: 'Sistemas',
    links: ['NovaEstoque', 'NovaArena', 'NovaMotors'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nos', 'Equipe', 'Contato'],
  },
  {
    title: 'Suporte',
    links: ['Documentacao', 'FAQ', 'Politica de Privacidade'],
  },
];

const socials = [
  { icon: 'bi-github',    href: 'https://github.com/wesleysilva6',                         label: 'GitHub'    },
  { icon: 'bi-linkedin',  href: 'https://www.linkedin.com/in/wesley-wagner-nunes-silva-424725359/', label: 'LinkedIn'  },
  { icon: 'bi-whatsapp', href: 'https://wa.me/5544997422772',                               label: 'WhatsApp'  },
  { icon: 'bi-envelope-fill', href: 'mailto:contato@novawave.tech',                        label: 'Email'     },
];

export default function Footer() {
  return (
    <Box as="footer" bg="#e8e8f6" position="relative" overflow="hidden">
      {/* Top gradient line */}
      <Box
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(108,99,255,0.3), rgba(108,99,255,0.2), transparent)"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} py={{ base: '48px', md: '72px' }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: '40px', md: '32px' }} mb="48px">
          {/* Brand column */}
          <Box>
            <Box mb="16px">
              <img
                src={logoImg}
                alt="NovaWave Tech"
                style={{ width: '180px', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Box>
            <Text fontSize="14px" color="#64748b" lineHeight={1.7} maxW="280px" mb="20px">
              Transformando ideias em solucoes tecnologicas de ponta. Inovacao, seguranca e performance para o seu negocio.
            </Text>
            <Flex gap="10px" flexWrap="wrap">
              {socials.map((s) => (
                <Box
                  asChild key={s.label}
                  w="36px" h="36px" borderRadius="10px"
                  bg="rgba(108,99,255,0.1)" color="#6c63ff"
                  display="flex" alignItems="center" justifyContent="center"
                  border="1px solid rgba(108,99,255,0.15)"
                  _hover={{ bg: '#6c63ff', color: '#fff', transform: 'translateY(-2px)', boxShadow: '0 4px 16px rgba(108,99,255,0.3)' }}
                  transition="all 0.25s"
                >
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={`bi ${s.icon}`} style={{ fontSize: '15px' }} />
                  </a>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <Box key={col.title}>
              <Text fontSize="14px" fontWeight={700} color="#1a1a3e" mb="16px" letterSpacing="0.5px">
                {col.title}
              </Text>
              <Flex direction="column" gap="10px">
                {col.links.map((link) => (
                  <Text
                    key={link}
                    fontSize="14px"
                    color="#64748b"
                    cursor="pointer"
                    _hover={{ color: '#6c63ff' }}
                    transition="color 0.3s"
                  >
                    {link}
                  </Text>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* Bottom */}
        <Box pt="24px" borderTop="1px solid rgba(108,99,255,0.1)">
          <Flex align="center" justify="space-between" flexWrap="wrap" gap="12px"
            direction={{ base: 'column', md: 'row' }}>
            <Text fontSize="13px" color="#94a3b8">
              &copy; {new Date().getFullYear()} NovaWave Tech. Todos os direitos reservados.
            </Text>
            <Flex align="center" gap="12px">
              <Badge px="10px" py="4px" borderRadius="50px" fontSize="10px" fontWeight={700}
                bg="rgba(52,211,153,0.1)" color="#34d399" border="1px solid rgba(52,211,153,0.2)">
                <Flex align="center" gap="5px">
                  <Box w="5px" h="5px" borderRadius="50%" bg="#34d399"
                    boxShadow="0 0 6px #34d399" />
                  Online
                </Flex>
              </Badge>
              <Flex align="center" gap="4px" fontSize="13px" color="#94a3b8">
                Feito com <i className="bi bi-heart-fill" style={{ fontSize: '12px', color: '#f472b6' }} /> no Brasil
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
