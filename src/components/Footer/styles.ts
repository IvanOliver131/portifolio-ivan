import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme.primary};

  div {
    margin-bottom: 0.5rem;
  }
`;
