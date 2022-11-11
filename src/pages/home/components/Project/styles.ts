import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin: 1rem;

  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 1.5rem;

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const ProjectsData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 0.5rem;

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
