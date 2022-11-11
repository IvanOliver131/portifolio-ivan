import { ReactNode } from "react";

import { HeaderTopicContainer } from "./styles";

interface HeaderTopicProps {
  children: ReactNode;
  title: string;
}

function HeaderTopic({ children, title }: HeaderTopicProps) {
  return (
    <>
      <HeaderTopicContainer>
        {children}
        <h2>{title}</h2>
      </HeaderTopicContainer>
      <hr />
    </>
  );
}

export { HeaderTopic };
