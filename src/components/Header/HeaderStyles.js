import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const LogoDiv = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  color: white;
`;

export const Nav = styled.ul`
  grid-area: 1 / 8 / 2 / 11;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
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
