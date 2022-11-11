import { Route, Routes } from "react-router-dom";

import { DefaultTheme } from "styled-components";

import { Home } from "./pages/home";

interface RouterProps {
  toggleTheme: () => void;
  themeSelected: DefaultTheme;
}

function Router({ toggleTheme, themeSelected }: RouterProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home toggleTheme={toggleTheme} themeSelected={themeSelected} />
        }
      />
    </Routes>
  );
}

export { Router };
