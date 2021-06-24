import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: ${(props) => props.theme.colors.gradient1};
`;

export const SocialDiv = styled.div`
  grid-area: 1 / 10 / 2 / 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
