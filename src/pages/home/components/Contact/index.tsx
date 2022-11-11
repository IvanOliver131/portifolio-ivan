import { AiOutlineMail } from "react-icons/ai";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ContactContainer } from "./styles";

interface ContactProps {
  color: string;
}

function Contact({ color }: ContactProps) {
  return (
    <ContactContainer>
      <HeaderTopic title="Contato">
        <AiOutlineMail size={16} color={color} />
      </HeaderTopic>
    </ContactContainer>
  );
}

export { Contact };
