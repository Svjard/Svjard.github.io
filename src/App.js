import React from 'react';

import ThemeContext, { theme } from './Theme';
import { Wrapper } from './styles';

import GlobalStyle from './GlobalStyle';
import NormalizedStyles from './NormalizedStyles';

import Header from './features/Header';
import Experience from './views/Experience';
import Education from './views/Education';
import Skills from './views/Skills';

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle />
      <NormalizedStyles />
      <Header />
      <Wrapper>
        <Experience />
        <Education />
        <Skills />
      </Wrapper>
    </ThemeContext.Provider>
  );
}

export default App;
