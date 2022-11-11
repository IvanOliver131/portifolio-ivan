import styled from "styled-components";

export const SocialMediasContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  gap: 0.5rem;

  font-size: 1.5rem;

  a {
    text-decoration: none;
    padding: 0.5rem;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;

      background-color: ${(props) => props.theme.primary};
    }
  }
`;
