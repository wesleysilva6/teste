import { useState } from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Badge, Input, Textarea } from '@chakra-ui/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent('Contato via site NovaWave');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:contato@novawave.tech?subject=${subject}&body=${body}`;
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <Box id="contact" py={{ base: '80px', md: '120px' }} position="relative">
      {/* Background glow */}
      <Box
        position="absolute"
        w="500px"
        h="500px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)"
        bottom="10%"
        right="-5%"
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" px={{ base: '20px', md: '48px' }} position="relative" zIndex={1}>
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
            Contato
          </Badge>
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight={700}
            color="#1a1a3e"
            lineHeight={1.2}
          >
            Vamos <Box as="span" className="gradient-text">conversar</Box>
          </Heading>
          <Text fontSize="18px" color="#64748b" maxW="600px">
            Entre em contato conosco e descubra como podemos ajudar a transformar sua ideia em realidade.
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="48px" maxW="1100px" mx="auto">
          {/* Info side */}
          <Flex direction="column" gap="20px">
            {[
              { icon: <i className="bi bi-envelope-fill" style={{ fontSize: '20px' }} />, label: 'Email', value: 'contato@novawave.tech' },
              { icon: <i className="bi bi-geo-alt-fill" style={{ fontSize: '20px' }} />, label: 'Localização', value: 'Douradina, PR — Brasil' },
              { icon: <i className="bi bi-whatsapp" style={{ fontSize: '20px' }} />, label: 'WhatsApp', value: '+55 (44) 97442-2772' },
            ].map((item) => (
              <Flex
                key={item.label}
                align="flex-start"
                gap="16px"
                p="20px"
                borderRadius="14px"
                bg="rgba(255,255,255,0.9)"
                border="1px solid rgba(108,99,255,0.1)"
                _hover={{ borderColor: 'rgba(108,99,255,0.3)' }}
                transition="border-color 0.3s"
              >
                <Flex
                  w="40px"
                  h="40px"
                  borderRadius="10px"
                  bg="rgba(108,99,255,0.1)"
                  color="#6c63ff"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  {item.icon}
                </Flex>
                <Box>
                  <Text fontSize="14px" fontWeight={600} color="#1a1a3e">{item.label}</Text>
                  <Text fontSize="14px" color="#64748b">{item.value}</Text>
                </Box>
              </Flex>
            ))}

            <Flex gap="12px" flexWrap="wrap" mt="8px">
              <Box
                asChild
                display="inline-flex"
                alignItems="center"
                gap="8px"
                px="20px"
                py="12px"
                borderRadius="50px"
                bg="rgba(37,211,102,0.12)"
                color="#25d366"
                border="1px solid rgba(37,211,102,0.3)"
                fontWeight={600}
                fontSize="14px"
                _hover={{ bg: 'rgba(37,211,102,0.2)' }}
                transition="all 0.3s"
              >
                <a href="https://wa.me/5544997422772" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp" style={{ fontSize: '16px' }} /> WhatsApp
                </a>
              </Box>
              <Box
                asChild
                display="inline-flex"
                alignItems="center"
                gap="8px"
                px="20px"
                py="12px"
                borderRadius="50px"
                bg="rgba(108,99,255,0.1)"
                color="#6c63ff"
                border="1px solid rgba(108,99,255,0.3)"
                fontWeight={600}
                fontSize="14px"
                _hover={{ bg: 'rgba(108,99,255,0.2)' }}
                transition="all 0.3s"
              >
                <a href="mailto:contato@novawave.tech">
                  <i className="bi bi-envelope-fill" style={{ fontSize: '16px' }} /> Email
                </a>
              </Box>
            </Flex>
          </Flex>

          {/* Form side */}
          <Flex
            as="form"
            direction="column"
            gap="20px"
            p="36px"
            borderRadius="20px"
            bg="rgba(255,255,255,0.9)"
            border="1px solid rgba(108,99,255,0.1)"
            onSubmit={handleSubmit}
          >
            {sent ? (
              <Flex direction="column" align="center" justify="center" gap="16px" py="40px" textAlign="center">
                <Flex
                  w="72px"
                  h="72px"
                  borderRadius="50%"
                  bg="rgba(108,99,255,0.1)"
                  color="#6c63ff"
                  align="center"
                  justify="center"
                  fontSize="32px"
                >
                  <i className="bi bi-check-circle-fill" />
                </Flex>
                <Box>
                  <Text fontSize="20px" fontWeight={700} color="#1a1a3e" mb="8px">Mensagem enviada!</Text>
                  <Text fontSize="14px" color="#64748b" maxW="280px">
                    Seu cliente de email foi aberto. Entraremos em contato em breve.
                  </Text>
                </Box>
                <Box
                  asChild
                  mt="8px"
                  px="24px"
                  py="10px"
                  borderRadius="50px"
                  border="1px solid rgba(108,99,255,0.3)"
                  color="#6c63ff"
                  fontSize="14px"
                  fontWeight={600}
                  _hover={{ bg: 'rgba(108,99,255,0.06)' }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  <button type="button" onClick={() => setSent(false)}>Enviar outra mensagem</button>
                </Box>
              </Flex>
            ) : (
              <>
                <Box>
                  <Text fontSize="14px" fontWeight={500} color="#1a1a3e" mb="8px">Nome</Text>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    bg="rgba(248,248,255,0.9)"
                    border="1px solid rgba(108,99,255,0.15)"
                    borderRadius="12px"
                    color="#1a1a3e"
                    px="18px"
                    py="14px"
                    fontSize="15px"
                    _placeholder={{ color: '#94a3b8' }}
                    _focus={{ borderColor: '#6c63ff', boxShadow: '0 0 0 3px rgba(108,99,255,0.15)' }}
                    outline="none"
                  />
                </Box>
                <Box>
                  <Text fontSize="14px" fontWeight={500} color="#1a1a3e" mb="8px">Email</Text>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    bg="rgba(248,248,255,0.9)"
                    border="1px solid rgba(108,99,255,0.15)"
                    borderRadius="12px"
                    color="#1a1a3e"
                    px="18px"
                    py="14px"
                    fontSize="15px"
                    _placeholder={{ color: '#94a3b8' }}
                    _focus={{ borderColor: '#6c63ff', boxShadow: '0 0 0 3px rgba(108,99,255,0.15)' }}
                    outline="none"
                  />
                </Box>
                <Box>
                  <Text fontSize="14px" fontWeight={500} color="#1a1a3e" mb="8px">Mensagem</Text>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos ajudar?"
                    required
                    rows={5}
                    bg="rgba(248,248,255,0.9)"
                    border="1px solid rgba(108,99,255,0.15)"
                    borderRadius="12px"
                    color="#1a1a3e"
                    px="18px"
                    py="14px"
                    fontSize="15px"
                    resize="vertical"
                    _placeholder={{ color: '#94a3b8' }}
                    _focus={{ borderColor: '#6c63ff', boxShadow: '0 0 0 3px rgba(108,99,255,0.15)' }}
                    outline="none"
                  />
                </Box>
                <Flex
                  as="button"
                  type="submit"
                  align="center"
                  justify="center"
                  gap="10px"
                  w="100%"
                  py="16px"
                  borderRadius="50px"
                  bg="linear-gradient(135deg, #6c63ff, #00e5ff)"
                  color="#fff"
                  fontWeight={700}
                  fontSize="16px"
                  border="none"
                  cursor="pointer"
                  boxShadow="0 4px 25px rgba(108,99,255,0.4)"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 35px rgba(108,99,255,0.5)' }}
                  transition="all 0.3s"
                >
                  <i className="bi bi-send-fill" style={{ fontSize: '18px' }} /> Enviar mensagem
                </Flex>
              </>
            )}
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
