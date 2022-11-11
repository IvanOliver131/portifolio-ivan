import { AiFillSetting } from "react-icons/ai";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiGithub,
  SiPrisma,
  SiNodedotjs
} from "react-icons/si";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ToolsContainer, ToolsIcons } from "./styles";

interface ToolsProps {
  color: string;
}

function Tools({ color }: ToolsProps) {
  return (
    <ToolsContainer>
      <HeaderTopic title="Ferramentas">
        <AiFillSetting size={16} />
      </HeaderTopic>

      <ToolsIcons>
        <SiTypescript size={30} color={color} />
        <SiJavascript size={30} color={color} />
        <SiReact size={30} color={color} />
        <SiNodedotjs size={30} color={color} />
        <SiGithub size={30} color={color} />
        <SiPrisma size={30} color={color} />
      </ToolsIcons>
    </ToolsContainer>
  );
}

export { Tools };
