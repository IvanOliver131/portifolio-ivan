import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const ProfileImage = styled.img`
  height: 4rem;

  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.tertiary};
`;

export const ProfileData = styled.div``;

export const ProfileTitle = styled.h4``;

export const ProfileSubtitle = styled.span`
  font-size: 0.8rem;
`;
