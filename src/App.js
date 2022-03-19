import React from 'react';
import { ChakraProvider } from './features/Header/node_modules/@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import NormalizedStyles from './NormalizedStyles';
import theme from './Theme';

import WithSubnavigation from './features/Header';
import LargeWithNewsletter from './features/Footer';
import Home from './views/Home';

import {
  Flex,
  Container,
} from './features/Header/node_modules/@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <NormalizedStyles />
      <StateContext>
        <Flex as="header" position="fixed" display={'flex'} w="100%" zIndex={100}>
          <WithSubnavigation />
        </Flex>
        <Container as="main" w="100%" maxWidth="100%" mt={20} paddingInlineStart={0} paddingInlineEnd={0}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
          <LargeWithNewsletter />
        </Container>
      </StateContext>
    </ChakraProvider>
  );
}

export default App;
