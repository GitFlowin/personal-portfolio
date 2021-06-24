import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background: ${(props) => props.theme.colors.gradient2};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
