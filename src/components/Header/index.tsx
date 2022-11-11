import { useContext } from "react";
import Switch from "react-switch";

import { DefaultTheme, ThemeContext } from "styled-components";

import {
  HeaderContainer,
  HeaderLimit,
  Navbar,
  Profile,
  ProfileData,
  ProfileImage,
  ProfileSubtitle,
  ProfileTitle
} from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
  themeSelected: DefaultTheme;
}

function Header({ toggleTheme, themeSelected }: HeaderProps) {
  const colors = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderLimit>
        <Profile>
          <ProfileImage src="https://github.com/IvanOliver131.png" />
          <ProfileData>
            <ProfileTitle>Ivan Oliveira</ProfileTitle>
            <ProfileSubtitle>
              Fullstack Developer | React | NodeJs
            </ProfileSubtitle>
          </ProfileData>
        </Profile>
        <Navbar>
          <a href="#">Resumo</a>
          <a href="#">Ferramentas</a>
          <a href="#">Experiência</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
          <Switch
            onChange={toggleTheme}
            checked={themeSelected.theme === "dark" ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={25}
            height={15}
            width={40}
            offHandleColor={colors.tertiary}
            offColor={colors.secondary}
            onColor={colors.secondary}
          />
        </Navbar>
      </HeaderLimit>
    </HeaderContainer>
  );
}

export { Header };
