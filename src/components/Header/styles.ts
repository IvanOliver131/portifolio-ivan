import styled from "styled-components";

interface NavbarProps {
  open: boolean;
}

interface BurgerProps {
  open: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 2rem;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
`;

export const HeaderLimit = styled.div`
  width: 1400px;

  display: flex;
  justify-content: space-between;
`;

export const Burger = styled.div<BurgerProps>`
  display: none;
  align-items: center;
  z-index: 20;

  &:hover {
    cursor: pointer;
    filter: contrast(0.8);
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
    top: 20px;
    right: 30px;
    position: ${({ open }) => (!open ? "fixed" : "none")};
  }
`;

export const Navbar = styled.ul<NavbarProps>`
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

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;

    position: fixed;
    top: 0;
    right: 0;

    border-left: 1px solid ${(props) => props.theme.primary};
    transform: ${({ open }) => (!open ? "translateX(0)" : "translateX(100%)")};
    background-color: ${(props) => props.theme.background};

    height: 100vh;
    width: 300px;

    padding-top: 4rem;
    gap: 1.5rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;

    position: fixed;
    top: 0;
    right: 0;

    border-left: 1px solid ${(props) => props.theme.primary};
    transform: ${({ open }) => (!open ? "translateX(0)" : "translateX(100%)")};
    background-color: ${(props) => props.theme.background};

    height: 100vh;
    width: 260px;

    padding-top: 4rem;
    gap: 1.5rem;
  }
`;
