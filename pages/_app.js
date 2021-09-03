import React, { useState } from "react";
import GlobalStyle from "../src/styles/GlobalStyle";
import MasterLayout from "../src/components/MasterLayout/index";
import "bootstrap/dist/css/bootstrap.min.css";

export const ThemeContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider
      value={{ state: darkTheme, ontoggleTheme: toggleTheme }}
    >
      <MasterLayout>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />
      </MasterLayout>
    </ThemeContext.Provider>
  );
}
