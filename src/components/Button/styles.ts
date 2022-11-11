import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 32px;
  margin-top: 1rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  font-weight: 600;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.background};

  &:hover {
    cursor: pointer;

    filter: brightness(0.9);
  }
`;
