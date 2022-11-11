import { useContext, useEffect, useState } from "react";

import { DefaultTheme, ThemeContext } from "styled-components";

import { Header } from "../../components/Header";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Resume } from "./components/Resume";
import { SocialMedia } from "./components/SocialMedia";
import { Tools } from "./components/Tools";
import { WorkExperience } from "./components/WorkExperience";
import { HomeContainer, MainContainer } from "./styles";

interface HomeProps {
  toggleTheme: () => void;
  themeSelected: DefaultTheme;
}

function Home({ toggleTheme, themeSelected }: HomeProps) {
  const [projects, setProjects] = useState([]);
  const colors = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://api.github.com/users/IvanOliver131/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <MainContainer>
      <Header toggleTheme={toggleTheme} themeSelected={themeSelected} />

      <HomeContainer>
        <SocialMedia color={colors.text} />
        <Resume color={colors.text} />
        <Tools color={colors.text} />
        <WorkExperience color={colors.text} />
        <Project color={colors.text} projects={projects} />
        <Contact color={colors.text} />
      </HomeContainer>
    </MainContainer>
  );
}

export { Home };
