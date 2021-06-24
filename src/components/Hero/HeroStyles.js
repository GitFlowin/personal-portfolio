import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  padding-top: 8rem;
  color: white;
`;

export const HeroDiv = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 64px;
  margin: 20px 0 20px;
`;

export const HeroDescription = styled.p`
  color: white;
  font-size: 24px;
  margin: 0 0 20px;
`;
