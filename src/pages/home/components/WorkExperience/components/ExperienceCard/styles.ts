import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;

  flex-direction: column;

  span {
    color: ${(props) =>
      props.theme.theme === "dark" ? props.theme.tertiary : props.theme.icon};
  }

  footer {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    font-weight: 600;

    span {
      padding-bottom: 0.425rem;
      color: ${(props) => props.theme.text};
    }
  }
`;
