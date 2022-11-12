import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: 1rem;

  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 1.5rem;

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const ContactData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  height: 35rem;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
