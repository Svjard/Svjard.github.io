import { extendTheme } from './features/Header/node_modules/@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export default theme;