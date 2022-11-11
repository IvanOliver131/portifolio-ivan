import { AiOutlineArrowRight } from "react-icons/ai";

import { TextCodeLanguage } from "../TextCodeLanguage";
import {
  Divider,
  FooterProjectCardContainer,
  ProjectCardContainer
} from "./styles";

interface ProjectGithub {
  id: number;
  name: string;
  language: string;
  html_url: string;
}

interface ProjectCardProps {
  project: ProjectGithub;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <h2>{project.name}</h2>
      <Divider />
      <TextCodeLanguage text={project.language} />
      <FooterProjectCardContainer>
        <a href={project.html_url} target="_blank">
          Acessar
        </a>
        <AiOutlineArrowRight size={16} />
      </FooterProjectCardContainer>
    </ProjectCardContainer>
  );
}

export { ProjectCard };
