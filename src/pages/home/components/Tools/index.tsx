import { AiFillSetting } from "react-icons/ai";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiGithub,
  SiPrisma,
  SiNodedotjs
} from "react-icons/si";

import { DefaultTheme } from "styled-components";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ToolsContainer, ToolsIcons } from "./styles";

interface ToolsProps {
  colors: DefaultTheme;
}

function Tools(props: ToolsProps) {
  return (
    <ToolsContainer id="tools">
      <HeaderTopic title="Ferramentas">
        <AiFillSetting size={16} color={props.colors.icon} />
      </HeaderTopic>

      <ToolsIcons>
        <SiTypescript size={30} color={props.colors.typescript} />
        <SiJavascript size={30} color={props.colors.javascript} />
        <SiReact size={30} color={props.colors.react} />
        <SiNodedotjs size={30} color={props.colors.nodejs} />
        <SiGithub size={30} color={props.colors.text} />
        <SiPrisma size={30} color={props.colors.prisma} />
      </ToolsIcons>
    </ToolsContainer>
  );
}

export { Tools };
