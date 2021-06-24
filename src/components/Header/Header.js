import Link from "next/link";
import { DiGhostSmall } from "react-icons/di";
import { Container, LogoDiv, Nav, NavLink, Title } from "./HeaderStyles";

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
      {/* Nav Links */}
      <Nav>
        <li>
          <Link href="#!" passHref>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#!" passHref>
            <NavLink>Journey</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#!" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
      </Nav>
    </Container>
  );
};

export default Header;
