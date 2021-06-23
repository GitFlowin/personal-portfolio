import { Container, SocialDiv, SocialIcon } from "./FooterStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>{new Date().getFullYear()}</p>
      </div>
      {/* Social Links */}
      <SocialDiv>
        <SocialIcon href="https://www.linkedin.com/in/seong-lee/">
          <AiFillLinkedin size="2rem" />
        </SocialIcon>
        <SocialIcon href="https://github.com/GitFlowing">
          <AiFillGithub size="2rem" />
        </SocialIcon>
      </SocialDiv>
    </Container>
  );
};

export default Footer;
