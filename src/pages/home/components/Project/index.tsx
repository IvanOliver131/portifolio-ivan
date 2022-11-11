import { AiFillProject } from "react-icons/ai";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ProjectCard } from "../../../../components/ProjectCard";
import { ProjectsContainer, ProjectsData } from "./styles";

interface ProjectProps {
  color: string;
  projects: ProjectGithub[];
}

interface ProjectGithub {
  id: number;
  name: string;
  language: string;
  html_url: string;
}

function Project({ color, projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <HeaderTopic title="Projetos">
        <AiFillProject size={16} color={color} />
      </HeaderTopic>

      <ProjectsData>
        {projects.map((project: ProjectGithub) => {
          return (
            <div key={String(project.id)}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </ProjectsData>
    </ProjectsContainer>
  );
}

export { Project };
