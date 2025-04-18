// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      dark: "#031716", // Dark color from your palette
      deep: "#032F30", // Another color from your palette
      teal: "#0A7075",
      aqua: "#0C969C",
      light: "#6BA3BE", // Lighter shades as necessary
      blue: "#274D60",
    },
  },
  fonts: {
    heading: "'Kiosk', sans-serif", // Assuming you're using Kiosk for headings
    body: "'Roboto', sans-serif", // Default font
  },
});

export default theme;
