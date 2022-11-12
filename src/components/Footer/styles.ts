import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.5rem;

  background-color: ${(props) => props.theme.primary};

  div {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;

    gap: 0.5rem;
  }
`;
