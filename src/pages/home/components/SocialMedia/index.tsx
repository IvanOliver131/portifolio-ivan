import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

import { SocialMediasContainer } from "./styles";

interface SocialMediaProps {
  color: string;
}

function SocialMedia({ color }: SocialMediaProps) {
  return (
    <SocialMediasContainer id="social-media">
      <a href="https://github.com/IvanOliver131" target="_blank">
        <FaGithub color={color} />
      </a>
      <a
        href="https://www.linkedin.com/in/ivan-oliveira-112048200/"
        target="_blank"
      >
        <FaLinkedin color={color} />
      </a>
      <a href="https://www.facebook.com/ivan.oliver.925059/" target="_blank">
        <FaFacebook color={color} />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=5535997300157&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <FaWhatsapp color={color} />
      </a>
    </SocialMediasContainer>
  );
}

export { SocialMedia };
