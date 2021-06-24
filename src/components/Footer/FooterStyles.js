import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  position: absolute;
  height: 65px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: ${(props) => props.theme.colors.gradient1};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SocialDiv = styled.div`
  grid-area: 1 / 10 / 2 / 10;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 5 / 1 / 6;
  }
`;

export const SocialIcon = styled.a`
  color: white;
  transition: 0.3s ease;
  &:hover {
    color: white;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
