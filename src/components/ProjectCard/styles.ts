import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;

  height: 11rem;

  padding: 1rem;

  gap: 0.5rem;

  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10rem;
    height: 5rem;
    white-space: nowrap;
    -webkit-line-clamp: 1; // Quantidade de linhas
  }

  span {
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cbc5ea;
  margin: 0.25em 0;
  padding: 0;
`;

export const FooterProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;

  width: 10rem;

  border: 1px solid #cbc5ea;
  border-radius: 0.25rem;

  gap: 0.25rem;

  &:hover {
    cursor: pointer;

    font-weight: 500;
    border: 2px solid #cbc5ea;

    filter: contrast(0.8);
    transition: 0.2s;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};

    &:hover {
      text-decoration: underline;
      filter: contrast(0.8);
    }
  }
`;
