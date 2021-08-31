import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  fontSizes: {
    heading1: "3rem",
    input: {
      large: "1.75rem",
    },
    menuItem: "1.4rem",
  },
  spacings: {},
  lineHeights: {},
};

export const theme = {
  light: {
    background: {
      primary: "#fff",
      secondary: "#bdc3c7",
      highlight: "#ededf0",
    },
    colors: {
      primary: "#eee",
      secondary: "#686869",
      darkHighlight: "#2f2f30",
      shadow: "#D8D4D5",
      border: "#bdc3c7",
    },
    icons: {
      size1: "1rem",
    },
    media: {
      custom: customMediaQuery,
      desktop: customMediaQuery(922),
      tablet: customMediaQuery(768),
      phone: customMediaQuery(576),
    },
    ...defaultTheme,
  },
  dark: {
    background: {
      primary: "red",
      secondary: "#707274",
    },
    colors: {
      primary: "#8a8a8a",
      secondary: "#5e82a5",
    },
    media: {
      custom: customMediaQuery,
      desktop: customMediaQuery(922),
      tablet: customMediaQuery(768),
      phone: customMediaQuery(576),
    },
    ...defaultTheme,
  },
};

function customMediaQuery(maxWidth: number) {
  `@media (max-width: ${maxWidth}px)`;
}

export const GlobalStyle = createGlobalStyle`
  body{
    width: 100vw;
    margin: 0 auto;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;
