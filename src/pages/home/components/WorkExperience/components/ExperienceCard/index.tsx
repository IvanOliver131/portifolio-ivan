import { BsCalendar, BsFillCircleFill } from "react-icons/bs";

import { ExperienceCardContainer } from "./styles";

interface ExperienceCardProps {
  title: string;
  job: string;
  city: string;
  time: string;
}

function ExperienceCard({ title, job, city, time }: ExperienceCardProps) {
  return (
    <ExperienceCardContainer>
      <h2>{title}</h2>
      <span>
        {job} <BsFillCircleFill size={8} /> {city}
        <footer>
          <BsCalendar />
          <span>{time}</span>
        </footer>
      </span>
    </ExperienceCardContainer>
  );
}

export { ExperienceCard };
