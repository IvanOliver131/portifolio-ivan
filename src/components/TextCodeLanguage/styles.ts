import styled from "styled-components";

export const TextCode = styled.h3`
  color: ${(props) =>
    props.children === "TypeScript"
      ? props.theme.typescript
      : props.children === "JavaScript"
      ? props.theme.javascript
      : props.children === "HTML"
      ? props.theme.html
      : props.theme.css};
`;
