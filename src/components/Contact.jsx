import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Feedback from './Feedback';

function Contact() {
  return (
    <Flex
      className='Contact'
      backgroundImage="url('/dark-city-bg.jpg')"
      width={{ base: '100%', lg: '100%' }}
      height={{ base: '100vh', lg: '78vh' }}
      paddingX={{ base: '2%', md: '2em', lg: '4em' }}
      paddingTop={{ md: '1em', lg: '0.4em' }}
      backgroundSize={'cover'}
      backgroundRepeat='no-repeat'
      justifyContent={'space-between'}>
      <Container
        as={SimpleGrid}
        columns={{ base: 1, md: 2 }}
        minWidth={'100%'}

        // spacing={{ base: 10, lg: 32 }}
        // py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Box
          alignSelf={'self-end'}
          justifySelf={{ base: 'center' }}
          marginStart={{ base: '0', sm: '2%', md: '2%', lg: '8%' }}
          paddingBottom={{ base: '2em', lg: '4em' }}>
          <Heading
            fontSize={{ base: '3em', md: '6em', lg: '4em' }}
            color={'white'}>
            Contact Us
          </Heading>
        </Box>

        <Box
          paddingBottom={{ base: '4%' }}
          justifySelf={{ base: 'center' }}
          minW={'100%'}>
          <Feedback />
        </Box>
      </Container>
    </Flex>
  );
}

export default Contact;
