import React from 'react';

import ThemeContext, { theme } from './Theme';

import GlobalStyle from './GlobalStyle';
import NormalizedStyles from './NormalizedStyles';

import Header from './features/Header';

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle />
      <NormalizedStyles />
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
