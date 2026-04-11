import { Box, Flex, Text, HStack, SimpleGrid } from '@chakra-ui/react';

const footerLinks = [
  {
    title: 'Produto',
    links: ['NovaAI', 'NovaShield', 'NovaAnalytics', 'NovaWeb', 'NovaCloud', 'NovaEdge'],
  },

  {
    title: 'Suporte',
    links: ['Documentação', 'Status', 'Contato', 'FAQ'],
  },
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
            <HStack gap="10px" mb="16px">
              <Flex
                w="36px"
                h="36px"
                borderRadius="10px"
                bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
                align="center"
                justify="center"
              >
                <i className="bi bi-lightning-charge-fill" style={{ fontSize: '18px', color: '#fff' }} />
              </Flex>
              <Box>
                <Text fontSize="18px" fontWeight={800} color="#1a1a3e" lineHeight={1}>NovaWave</Text>
                <Text fontSize="9px" fontWeight={600} color="#6c63ff" letterSpacing="2px" textTransform="uppercase" lineHeight={1} mt="2px">
                  TECH
                </Text>
              </Box>
            </HStack>
            <Text fontSize="14px" color="#64748b" lineHeight={1.7} maxW="280px">
              Transformando ideias em soluções tecnológicas de ponta. Inovação, segurança e performance para o seu negócio.
            </Text>
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
        <Box
          pt="24px"
          borderTop="1px solid rgba(108,99,255,0.1)"
        >
          <Flex
            align="center"
            justify="space-between"
            flexWrap="wrap"
            gap="12px"
            direction={{ base: 'column', md: 'row' }}
          >
            <Text fontSize="13px" color="#94a3b8">
              &copy; {new Date().getFullYear()} NovaWave Tech. Todos os direitos reservados.
            </Text>
            <Flex align="center" gap="4px" fontSize="13px" color="#94a3b8">
              Feito com <i className="bi bi-heart-fill" style={{ fontSize: '12px', color: '#f472b6' }} /> no Brasil
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
