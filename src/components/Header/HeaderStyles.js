import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    row-gap: 2rem;
  }
`;

export const LogoDiv = styled.div`
  grid-area: 1 / 2 / 1 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 2 / 1 / 3;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  color: white;
  white-space: nowrap;
`;

export const Nav = styled.ul`
  grid-area: 1 / 8 / 2 / 10;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 8;
  }
`;

export const NavLink = styled.a`
  font-size: 18px;
  color: #f3f7f6;
  opacity: 0.8;
  transition: 0.5s ease;
  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;
