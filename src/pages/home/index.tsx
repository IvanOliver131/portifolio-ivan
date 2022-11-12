import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { DefaultTheme, ThemeContext } from "styled-components";

import { Footer } from "../../components/Footer";
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
        <SocialMedia color={colors.iconSocialMedia} />
        <Resume color={colors.icon} />
        <Tools colors={colors} />
        <WorkExperience color={colors.icon} />
        <Project color={colors.icon} projects={projects} />
        <Contact color={colors.icon} />
      </HomeContainer>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={colors.theme === "dark" ? "dark" : "light"}
      />
    </MainContainer>
  );
}

export { Home };
