import styled from "styled-components";

export const IconContainer = styled.div``;

export const RootContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  height: 2.5rem;

  padding: 1rem;

  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.primary};
`;

export const InputContainer = styled.input`
  border: none;
  align-items: center;

  background-color: transparent;

  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.secondary};
  }

  /* Cor de fundo do autocomplete */
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px ${(props) => props.theme.primary} inset;
  }

  /* Cor do texto do autocomplete */
  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.text} !important;
  }
`;
