import styled from "styled-components";

import * as Tabs from "@radix-ui/react-tabs";

export const WorkExperienceContainer = styled.div`
  margin: 1rem;

  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 1.5rem;

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const ActionSelectorContainer = styled(Tabs.Root)``;

export const Actions = styled(Tabs.List)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 1rem;
`;

export const ActionOption = styled(Tabs.Trigger)`
  background-color: ${(props) => props.theme.icon};
  border: none;

  height: 45px;
  line-height: 1;

  color: #ffffff;

  font-size: 16px;
  font-weight: 600;

  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &[data-state="active"] {
    border-bottom: 3px solid ${(props) => props.theme.quartenary};
  }

  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }
`;

export const ActionContent = styled(Tabs.Content)``;

export const WorkExperienceData = styled.div``;

export const Education = styled.div``;
