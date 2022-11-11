import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
`;

export const Profile = styled.div`
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

export const Navbar = styled.ul`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  a {
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;

    color: ${(props) => props.theme.text};

    &:hover {
      cursor: pointer;

      filter: brightness(0.8);
    }
  }

  @media (max-width: 840px) {
    display: none;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;
