import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiGhostSmall } from "react-icons/di";
import {
  Container,
  LogoDiv,
  Nav,
  NavLink,
  SocialDiv,
  SocialIcon,
  Title,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      {/* Logo */}
      <LogoDiv>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title>
              <DiGhostSmall />
              <span>Seong Lee</span>
            </Title>
          </a>
        </Link>
      </LogoDiv>
      {/* Social Links */}
      {/* <SocialDiv>
        <SocialIcon href="https://www.linkedin.com/in/seong-lee/">
          <AiFillLinkedin size="2rem" />
        </SocialIcon>
        <SocialIcon href="https://github.com/GitFlowing">
          <AiFillGithub size="2rem" />
        </SocialIcon>
      </SocialDiv> */}
      {/* Nav Links */}
      <Nav>
        <li>
          <Link href="/">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>Journey</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
      </Nav>
    </Container>
  );
};

export default Header;
