import React from 'react';

export const theme = {
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
};

const ThemeContext = React.createContext(theme);

export default ThemeContext;