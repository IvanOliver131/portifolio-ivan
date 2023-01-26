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
        Graduado em Sistema de Informação, atuando a mais de um ano com
        desenvolvimento de software com vasta experiência em Chatbot e processo
        de retenção de usuários. No Backend tenho atuado com JavaScript,
        utilizando o ecossistema NodeJS. Em ambiente cloud, atuando em ambiente
        AWS, no uso de lambdas, serverless e também com versionamento de código
        em git.
        <br />
        <br />
        Tenho pautado meus estudos no último ano voltado para boas práticas sob
        a estrutura ímpar de single thread, paralelimos e todo imenso mundo da
        estrutura assincrona(Bloqueante e Não Bloqueante) disponibilizado no
        ambiente JS. Tenho atuado em projetos de largas escalas, desenvolvendo
        Chatbot desde startups à grande cooperativas financeira no Brasil.
        Atualmente estou responsável pelo processo de implementação de boas
        práticas com modelagem em projeto de componentes e modelagem de
        requisito baseado em cenários(Use Case).
        <br />
        <br />
        Nos últimos anos venho ampliando ainda mais meus conhecimento,
        principalmente no uso de ferramentas tecnológicas de cache como redis,
        oAuth para segurança, eslint para testes lint e mocha/jest para testes
        unitários.
        <br />
        <br />
        Trabalhando em equipes diversas, no uso de metodologias ágeis Scrum e
        XP.
        <br />
        <br />
        Sempre busco aperfeiçoar minhas habilidades e encontrar novos desafios
        para me tornar um grande profissional.
        <br />
        <br />
        Se estiver interessado, visite meu github o/
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
