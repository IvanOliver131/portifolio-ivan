import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

import { SocialMediasContainer } from "./styles";

interface SocialMediaProps {
  color: string;
}

function SocialMedia({ color }: SocialMediaProps) {
  return (
    <SocialMediasContainer>
      <a href="#" target="_blank">
        <FaGithub color={color} />
      </a>
      <a href="#" target="_blank">
        <FaLinkedin color={color} />
      </a>
      <a href="#" target="_blank">
        <FaFacebook color={color} />
      </a>
      <a href="#" target="_blank">
        <FaWhatsapp color={color} />
      </a>
    </SocialMediasContainer>
  );
}

export { SocialMedia };
