import styled from "styled-components";

export const ResumeContainer = styled.div`
  margin: 1rem;

  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 1.5rem;

  span {
    display: block;
    margin-top: 0.5rem;
  }

  a {
    text-decoration: none;

    margin-left: 0.5rem;

    color: ${(props) => props.theme.text};
    font-weight: 600;

    &:hover {
      filter: brightness(0.8);
      font-weight: 700;
    }
  }

  footer {
    display: flex;
    justify-content: end;
  }
`;
