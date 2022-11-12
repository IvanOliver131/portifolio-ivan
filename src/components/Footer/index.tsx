import { useContext } from "react";

import { ThemeContext } from "styled-components";

import { SocialMedia } from "../../pages/home/components/SocialMedia";
import { FooterContainer } from "./styles";

function Footer() {
  const colors = useContext(ThemeContext);
  return (
    <FooterContainer>
      <span>© 2022 Ivan Oliveira. All rights reserved</span>
      <div>
        <SocialMedia color={colors.text} />
      </div>
    </FooterContainer>
  );
}

export { Footer };
