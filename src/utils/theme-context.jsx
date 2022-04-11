import { createContext, useContext, useState } from "react";

const light = {
  bgColor: "#E3FDFD",
  textColor: "#222831",
};
const dark = {
  bgColor: "#222831",
  textColor: "#E3FDFD",
};

const initialState = { mode: dark, isLight: false };

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);
  const themeHandler = () => {
    theme.isLight
      ? setTheme({ mode: dark, isLight: false })
      : setTheme({ mode: light, isLight: true });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
