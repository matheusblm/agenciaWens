import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#5FCAD3",
    secondary: "#FFBC92",
    title: "#212121",
    text: "#80807E",
  },
  styles: {
    global: {
      body: {
        color: "#00000",
        fontFamily: "Montserrat",
      },
      h3: {
        fontFamily: "Montserrat",
        color: "#212121",
      },
      h4: {
        fontFamily: "Montserrat",
        color: "#212121",
      },
      h5: {
        fontFamily: "Montserrat",
        color: "#212121",
      },
    },
  },
});
