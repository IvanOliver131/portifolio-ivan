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
    <ResumeContainer>
      <HeaderTopic title="Resumo">
        <FaUser size={16} color={color} />
      </HeaderTopic>

      <span>
        Olá, meu nome é Ivan Oliveira, sou apaixonado por programação e
        tecnologia.
        <br />
        <br />
        Atualmente sou desenvolvedor de software na ZENVIA, trabalho e tenho
        experiência principalmente em NodeJs e React, estou sempre disposto e
        ansioso para obter novos conhecimentos e experiência.
        <br />
        <br />
        Obtive meu primeiro contato com a área de desenvolvimento em 2017,
        quando iniciei a faculdade de Sistemas de Informação da Universidade
        Federal de Itajubá - MG, desde o ensino médio me apaixonei pela área de
        desenvolvimento em 2015, sempre busquei me aperfeiçoar minhas
        habilidades e encontrar novos desafios para me tornar um grande
        profissional.
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
