import { StyledButton } from "./ButtonStyle";

const Button = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
