import { Box, Flex, Heading } from '@chakra-ui/react';
import Feedback from './Feedback';

function Contact() {
  return (
    <Flex
      className='Contact'
      backgroundImage="url('/dark-city-bg.jpg')"
      width={'100%'}
      height={'80vh'}
      paddingX={'4em'}
      paddingTop={'2em'}
      backgroundSize={'cover'}
      backgroundRepeat='no-repeat'
      justifyContent={'space-between'}>
      <Box alignSelf={'self-end'} marginStart={'16em'} paddingBottom={'2em'}>
        <Heading fontSize={{ sm: '2em', md: '3em', lg: '4em' }} color={'white'}>
          Contact Us
        </Heading>
      </Box>
      <Box>
        <Feedback />
      </Box>
    </Flex>
  );
}

export default Contact;
