import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '../../Header/node_modules/@chakra-ui/react';

export default function Splash() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 16 }}>
          <Heading
            fontWeight={600}
            color={'white'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} color={'green.400'} px={{base: 4 }}>
              Cultivate
            </Text>
            the skills to be a successful software developer
          </Heading>
          <Text color={'gray.100'} fontSize={{ base: 'lg' }}>
            Enroll today and gain the skills to be a full-stack developer and
            set yourself apart from other developers.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}