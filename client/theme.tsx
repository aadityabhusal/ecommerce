import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  fontSizes: {
    heading1: "3rem",
    sectionTitle: "2rem",
    subSectionTitle: "1.4rem",
    input: {
      large: "1.4rem",
    },
    menuItem: "1rem",
    menuItemSmall: "0.9rem",
    productCard: {
      title: "1.2rem",
      price: "1.4rem",
      secondary: "1.1rem",
    },
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
      footer: "#182233",
    },
    color: {
      primary: "#2f2f30",
      secondary: "#686869",
      onDark: "#eee",
      link: "#3498db",
      shadow: "#D8D4D5",
      border: "#bdc3c7",
      rating: "#f9c961",
      price: "#27ae60",
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
    width: 100%;
    margin: 0 auto;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif
  }
`;
