import { MdWork } from "react-icons/md";

import { HeaderTopic } from "../../../../components/HeaderTopic";
import { WorkExperienceContainer } from "./styles";

interface WorkExperienceProps {
  color: string;
}

function WorkExperience({ color }: WorkExperienceProps) {
  return (
    <WorkExperienceContainer>
      <HeaderTopic title="Experiência">
        <MdWork size={16} color={color} />
      </HeaderTopic>

      <div>
        <div>
          <h2>ZENVIA</h2>
          <span> NodeJs Developer</span>
        </div>
        <div>
          <h2>D1-Jornadas Digitais</h2>
          <span> NodeJs Developer</span>
        </div>
        <div>
          <h2>Rural Smart</h2>
          <span>Fullstack Developer</span>
        </div>
      </div>
    </WorkExperienceContainer>
  );
}

export { WorkExperience };
