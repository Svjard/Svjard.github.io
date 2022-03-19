import {
  Box,
  SimpleGrid,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
} from '../../Header/node_modules/@chakra-ui/react';

const PlantIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="16" height="16" style={{display: 'inline-block', marginRight: '10px'}}>
      <g transform="matrix(10.416666666666666,0,0,10.416666666666666,0,0)">
        <g>
          <path d="M10.54,11.35c.35.79.69,1.58,1,2.38l.31,1.11h.82l-.24-1.37a17.78,17.78,0,0,0-.82-2.6l.26-.16a3.73,3.73,0,0,0,1.52-2.59,6.48,6.48,0,0,0-1-4.12A10.83,10.83,0,0,0,7.63.45,3.81,3.81,0,0,0,4.24.35C3,1.08,2.8,2.79,2.82,3.84a9.52,9.52,0,0,0,1.3,4.47,6.8,6.8,0,0,0,3.27,2.9A4.67,4.67,0,0,0,10.54,11.35ZM7.78,10.18A5.92,5.92,0,0,1,4.94,7.82a8.68,8.68,0,0,1-1.33-4c-.08-1.5.24-2.33.73-2.76,1.08-.93,2.94.09,3,.11a9.69,9.69,0,0,1,4.14,3.38,5.68,5.68,0,0,1,.77,2.84,2.84,2.84,0,0,1-1.09,2.39l-.06,0c-.24-.49-.49-1-.75-1.44S9.8,7.48,9.5,7.05s-.61-.86-.93-1.27L7.91,5s-.29-.5-.57-.49a.31.31,0,0,0-.25.13.34.34,0,0,0,0,.35,2.62,2.62,0,0,0,.34.45l.53.77c.21.35.41.7.6,1.06.3.53.57,1.07.84,1.62s.46.92.68,1.4A3.71,3.71,0,0,1,7.78,10.18Z" style={{fill: '#BEDBBB'}}></path>
          <path d="M20.88,8.44a.33.33,0,0,0-.38.3,4.9,4.9,0,0,1-.53,1.5A6.85,6.85,0,0,1,19,11.55a3.35,3.35,0,0,1-1.73,1,1.66,1.66,0,0,1-.86-.07l.42-.6,1.1-1.5.37-.41a2.1,2.1,0,0,0,.27-.26c.17-.29,0-.45-.17-.5s-.26,0-1,.63L16,11.18l-.38.48a2,2,0,0,1,0-1.15,3.89,3.89,0,0,1,.77-1.58,5.32,5.32,0,0,1,2.27-1.46,2,2,0,0,1,1.63-.07.31.31,0,0,0,.38-.48,2.63,2.63,0,0,0-2.22-.18A6.4,6.4,0,0,0,15.6,8.25a4.8,4.8,0,0,0-1.2,2.45,2.61,2.61,0,0,0,.46,2l0,0a13.61,13.61,0,0,0-.73,1.42l-.27.73h.93l.16-.3.8-1.12a2.39,2.39,0,0,0,1.17.26,4,4,0,0,0,2.76-1.53,6.75,6.75,0,0,0,1-1.56,5.61,5.61,0,0,0,.5-1.77A.34.34,0,0,0,20.88,8.44Z" style={{fill: '#BEDBBB'}}></path>
          <path d="M17.25,16.07a.92.92,0,0,0-.51-.25,4.69,4.69,0,0,0-.78-.08c-1.54.08-4.32.21-6.16.32a.35.35,0,0,0,0,.69c.84,0,2.67-.11,4.26-.11a15,15,0,0,1,2.2.09.85.85,0,0,1,.19.06,2.24,2.24,0,0,0,0,.24c0,.61-.17,1.58-.33,2.54s-.33,1.93-.46,2.54c0,.19-.16.38-.15.45a1.65,1.65,0,0,1-.32.08,9.12,9.12,0,0,1-1.76.21,20.84,20.84,0,0,1-3.14-.06l-.46,0a9.1,9.1,0,0,1-.42-1.7c-.33-1.9-.59-4.46-.58-4.48a.31.31,0,0,0-.58-.19s.08,2.76.32,4.8A8,8,0,0,0,9,23.28a1,1,0,0,0,.67.41,17,17,0,0,0,3.78.3,8.92,8.92,0,0,0,2.3-.31,1.6,1.6,0,0,0,.74-.47,2.41,2.41,0,0,0,.22-.66,40.58,40.58,0,0,0,.64-4.14,10.18,10.18,0,0,0,.07-1.88A.79.79,0,0,0,17.25,16.07Z" style={{fill: '#FFFFFF'}}></path>
        </g>
      </g>
    </svg>
  );
}

export default function Curriculum() {
  return (
    <Container maxW={'100%'} bg={"#03506F"}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 16 }}>
        <Heading
          fontWeight={600}
          color={'#FFF'}
          fontSize={{ base: '2xl', sm: '4xl' }}
          lineHeight={'110%'}
        >
          Proven Real-World Curriculum
        </Heading>
        <Flex align="left" justify="left">
          <SimpleGrid columns={2}>
            <Text align={'left'} color={'#fff'} fontSize={{ base: 'lg' }} ml={{ base: 15 }}>
              We are dedicated to curating the curriculum to match the industry leading software development practices with the latest
              technologies, frameworks, and programming practices.
              <br/><br/>
              During our program, you’ll develop your technical skills, build a stand-out portfolio, and improve the soft skills you need to land a job and to excel in remote teams.
            </Text>
            <div>
              <Accordion allowMultiple={true}>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg={'#99A8B2'} _hover={{ background: 'rgba(153,168,178,0.5)',color: 'white'}}>
                      <Box flex='1' textAlign='left' color='#1C2B2D' fontWeight='bold'>
                        Technical Skills
                      </Box>
                      <AccordionIcon color='#1C2B2D' />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align={'left'} fontSize={{ base: 'lg' }} color={'white'}>
                    <List spacing={3}>
                      <ListItem>
                        <PlantIcon />
                        Modern Javascript / Typescript
                      </ListItem>
                      <ListItem>
                      <PlantIcon />
                        React (including Hooks, Styled Components, Flexbox, Storybook, and more...)
                      </ListItem>
                      <ListItem>
                        <PlantIcon />
                        Node.js
                      </ListItem>
                      <ListItem>
                        <PlantIcon />
                        Git
                      </ListItem>
                      <ListItem>
                        <PlantIcon />
                        Jest / Playwright
                      </ListItem>
                      <ListItem>
                        <PlantIcon />
                        PostgresSQL
                      </ListItem>
                      <ListItem>
                        <PlantIcon />
                        AWS / Terraform
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton bg={'#99A8B2'} _hover={{ background: 'rgba(153,168,178,0.5)',color: 'white'}}>
                      <Box flex='1' textAlign='left' color='#1C2B2D' fontWeight='bold'>
                        Soft Skills
                      </Box>
                      <AccordionIcon color='#1C2B2D' />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align={'left'} fontSize={{ base: 'lg' }} color={'white'}>
                    <List spacing={3}>
                      <ListItem>
                        <PlantIcon />
                        Effective Networking
                      </ListItem>
                      <ListItem>
                        <PlantIcon/>
                        Time Management
                      </ListItem>
                      <ListItem>
                        <PlantIcon/>
                        Cross-cultural Communication
                      </ListItem>
                      <ListItem>
                        <PlantIcon/>
                        Remote Work Best Practices
                      </ListItem>
                      <ListItem>
                        <PlantIcon/>
                        How to Prepare for Interviews
                      </ListItem>
                      <ListItem>
                        <PlantIcon/>
                        Job Searching
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Container>
  );
}