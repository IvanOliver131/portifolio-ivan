import { useState } from "react";
import { AiFillProject } from "react-icons/ai";

import { Button } from "../../../../components/Button";
import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ProjectCard } from "../../../../components/ProjectCard";
import { FooterProject, ProjectsContainer, ProjectsData } from "./styles";

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
  const [amountProjects, setAmountProjects] = useState(8);

  function handleSeeMore() {
    const newAmountProjects = amountProjects + 8;
    setAmountProjects(newAmountProjects);
  }

  function handleSeeLess() {
    const newAmountProjects = amountProjects - 8;
    setAmountProjects(newAmountProjects);
  }

  return (
    <ProjectsContainer id="project">
      <HeaderTopic title="Projetos">
        <AiFillProject size={16} color={color} />
      </HeaderTopic>

      <ProjectsData>
        {projects.slice(0, amountProjects).map((project: ProjectGithub) => {
          return (
            <div key={String(project.id)}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </ProjectsData>
      <FooterProject>
        {amountProjects > 8 && (
          <Button onClick={handleSeeLess}>Veja menos...</Button>
        )}
        {amountProjects < projects.length && (
          <Button onClick={handleSeeMore}>Veja mais...</Button>
        )}
      </FooterProject>
    </ProjectsContainer>
  );
}

export { Project };
