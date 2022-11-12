import styled from "styled-components";

export const FormContactContainer = styled.form`
  margin-top: 1rem;
  max-width: 380px;

  border-radius: 0.25rem;
  padding: 1rem;

  gap: 1rem;

  background-color: ${(props) => props.theme.background};

  button {
    width: 100%;
    background-color: ${(props) => props.theme.primary};
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputTextArea = styled.textarea`
  border: none;
  align-items: center;

  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 10rem;
  max-height: 10rem;

  padding: 1rem;

  background-color: ${(props) => props.theme.primary};

  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.secondary};
  }
`;
