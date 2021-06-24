import Button from "../Button/Button";
import { Container, HeroDescription, HeroDiv, HeroTitle } from "./HeroStyles";

const Hero = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <Container>
      <HeroDiv>
        <HeroTitle>Hi, I&apos;m Seong.</HeroTitle>
        <HeroDescription style={{ color: "red" }}>
          A work in progress, mobile views not supported!
        </HeroDescription>
        <HeroDescription>
          Welcome! This is the start of my portfolio site where I can showcase
          the work I&apos;ve done. Hoping to add more soon!
        </HeroDescription>
        <a href="mailto:seonglee9211@gmail.com">
          <Button>Contact Me</Button>
        </a>
      </HeroDiv>
    </Container>
  );
};

export default Hero;
