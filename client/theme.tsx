import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  fontSizes: {},
  spacings: {},
  lineHeights: {},
};

export const theme = {
  light: {
    background: {
      primary: "#3498db",
      secondary: "#bdc3c7",
    },
    colors: {
      primary: "#eee",
      secondary: "#2c3e50",
    },
    media: {
      custom: customMediaQuery,
      desktop: customMediaQuery(922),
      tablet: customMediaQuery(768),
      phone: customMediaQuery(576),
    },
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
  },
};

function customMediaQuery(maxWidth: number) {
  `@media (max-width: ${maxWidth}px)`;
}

export const GlobalStyle = createGlobalStyle`
  body{
    width: 980px;
    margin: 0 auto;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;
