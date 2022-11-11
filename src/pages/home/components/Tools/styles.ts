import styled from "styled-components";

export const ToolsContainer = styled.div`
  margin: 1rem;

  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 1.5rem;

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const ToolsIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  size: 5rem;
`;
