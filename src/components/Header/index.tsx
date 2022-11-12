import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Switch from "react-switch";

import { DefaultTheme, ThemeContext } from "styled-components";

import { Profile } from "./components/Profile";
import { Burger, HeaderContainer, HeaderLimit, Navbar } from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
  themeSelected: DefaultTheme;
}

function Header({ toggleTheme, themeSelected }: HeaderProps) {
  const [openNavbar, setOpenNavbar] = useState(true);
  const colors = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderLimit>
        <Profile />
        <Burger open={openNavbar} onClick={() => setOpenNavbar(!openNavbar)}>
          {openNavbar ? <GiHamburgerMenu size={28} /> : <MdClose size={28} />}
        </Burger>
        <Navbar open={openNavbar}>
          <a href="#resume">Resumo</a>
          <a href="#tools">Ferramentas</a>
          <a href="#work">Experiência</a>
          <a href="#project">Projetos</a>
          <a href="#contact">Contato</a>
          <Switch
            onChange={toggleTheme}
            checked={themeSelected.theme === "dark" ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={25}
            height={15}
            width={40}
            offHandleColor={colors.icon}
            offColor={colors.secondary}
            onColor={colors.secondary}
          />
        </Navbar>
      </HeaderLimit>
    </HeaderContainer>
  );
}

export { Header };
