import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  Heading,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      color={'gray.200'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        color: 'gray.500',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      position={'relative'}
      bg={'#0A0A0A'}
      color={'gray.200'}
      width={{ base: '100%', lg: '100%' }}
      height={{ base: '100%', lg: '22vh' }}>
      <Container as={Stack} maxW={'6xl'} pt={2}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr' }}
          spacing={8}>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <Heading as={'h3'} fontSize={{ base: '1em', md: '1em', lg: '1em' }}>
              Services
            </Heading>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Buying</Link>
            <Link href={'#'}>Pricing</Link>
          </Stack>
          <Stack spacing={6} align={'flex-end'} paddingTop={'20%'} marginBottom={{base: '3%'}}>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Whatsapp'} href={'#'}>
                <FaWhatsapp size={{ base: '3em', md: '3em' }} />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram size={{ base: '3em', md: '3em' }} />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook size={{ base: '3em', md: '3em' }} />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter size={{ base: '3em', md: '3em' }} />
              </SocialButton>
              <Heading fontSize={{ base: '1em', md: '1.6em', lg: '1.6em' }} alignSelf={'center'}>
                - Follow Us
              </Heading>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
