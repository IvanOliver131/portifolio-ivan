import { BsCloudDownload } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Button } from "../../../../components/Button";
import { HeaderTopic } from "../../../../components/HeaderTopic";
import { ResumeContainer } from "./styles";

interface ResumeProps {
  color: string;
}

function Resume({ color }: ResumeProps) {
  return (
    <ResumeContainer id="resume">
      <HeaderTopic title="Resumo">
        <FaUser size={16} color={color} />
      </HeaderTopic>

      <span>
        Olá, meu nome é Ivan Oliveira, sou apaixonado por programação e
        tecnologia.
        <br />
        <br />
        Atualmente sou Desenvolvedor NodeJs na ZENVIA, trabalho e tenho
        experiência principalmente em NodeJs e React, estou sempre disposto e
        ansioso para obter novos conhecimentos e experiências.
        <br />
        <br />
        Obtive meu primeiro contato com a área de desenvolvimento no ensino
        médio em 2015 e a partir daí surgiu a ideia de iniciar minha faculdade.
        Formei em Sistemas de Informação na Universidade Federal de Itajubá - MG
        em 2021, onde vi na teoria e na prática como são realizados os projetos
        de forma mais completa e profissional.
        <br />
        <br />
        Sempre busco aperfeiçoar minhas habilidades e encontrar novos desafios
        para me tornar um grande profissional.
        <br />
        <br />
        Se estiver interessado, visite meu github:
        <a href="https://github.com/IvanOliver131" target="_blank">
          IvanOliver131
        </a>
      </span>
      <footer>
        <a href="https://drive.google.com/uc?id=1bwPAhg2WD2ZU_mC9uayPjneKWDqczkG_&export=download">
          <Button type="submit">
            Download CV
            <BsCloudDownload size={20} />
          </Button>
        </a>
      </footer>
    </ResumeContainer>
  );
}

export { Resume };
