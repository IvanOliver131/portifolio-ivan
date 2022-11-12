import { BsCalendar, BsFillCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ExperienceCard } from "./components/ExperienceCard";
import {
  ActionContent,
  ActionOption,
  Actions,
  ActionSelectorContainer,
  Education,
  WorkExperienceContainer,
  WorkExperienceData
} from "./styles";

interface WorkExperienceProps {
  color: string;
}

function WorkExperience({ color }: WorkExperienceProps) {
  return (
    <WorkExperienceContainer id="work">
      <HeaderTopic title="Experiência">
        <MdWork size={16} color={color} />
      </HeaderTopic>

      <ActionSelectorContainer defaultValue="work">
        <Actions>
          <ActionOption value="work">Profissional</ActionOption>
          <ActionOption value="education">Educacional</ActionOption>
        </Actions>

        <ActionContent value="work">
          <WorkExperienceData>
            <ExperienceCard
              title="ZENVIA"
              job="NodeJS Developer"
              city="São Paulo - SP"
              time="2022"
            />
            <ExperienceCard
              title="D1 Jornadas Digitais"
              job="NodeJS Developer"
              city="São Paulo - SP"
              time="2021 - 2022"
            />
            <ExperienceCard
              title="Rural Smart"
              job="Fullstack Developer"
              city="Itajubá - MG"
              time="2021"
            />
          </WorkExperienceData>
        </ActionContent>
        <ActionContent value="education">
          <Education>
            <ExperienceCard
              title="Universidade Federal de Itajubá"
              job="Estudante"
              city="Itajubá-MG"
              time="2017-2022"
            />
            <ExperienceCard
              title="Técnico em controle ambiental"
              job="Estudante"
              city="Delfim moreira-MG"
              time="2015 - 2017"
            />
            <ExperienceCard
              title="Fundação Roge"
              job="Estudante"
              city="Delfim moreira-MG"
              time="2015 - 2017"
            />
          </Education>
        </ActionContent>
      </ActionSelectorContainer>
    </WorkExperienceContainer>
  );
}

export { WorkExperience };
