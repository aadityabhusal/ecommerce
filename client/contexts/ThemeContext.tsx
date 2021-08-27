import { ChangeEvent, createContext, FC, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../theme";

interface IThemeContext {
  darkTheme: boolean;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  darkTheme: false,
  toggleTheme() {},
});

export const ThemeContextProvider: FC = (props) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    let storedTheme = JSON.parse(localStorage.getItem("darkTheme") || "false");
    setDarkTheme(Boolean(storedTheme));
  }, [darkTheme]);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("darkTheme", e.target.checked.toString());
    setDarkTheme(e.target.checked);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <>
          <GlobalStyle />
          {props.children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
