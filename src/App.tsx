import { BrowserRouter } from "react-router-dom";

import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "./hooks/usePersistedState";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

function App() {
  const [themeSelected, setThemeSelected] = usePersistedState<DefaultTheme>(
    "theme",
    darkTheme
  );

  function toggleTheme() {
    setThemeSelected(themeSelected.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={themeSelected}>
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} themeSelected={themeSelected} />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
