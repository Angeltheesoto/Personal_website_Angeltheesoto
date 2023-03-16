import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../misc/logo";
import "./nav.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

export default function NavbarEl() {
  return (
    <>
      <Navbar className="navbar-container" id="navbar-container">
        <Container>
          <Navbar.Brand>
            <LinkRoute to="/">
              <Logo />
            </LinkRoute>
          </Navbar.Brand>
          <Nav className="me-auto nav-center">
            <Nav href="#about" className="text-white link-hover-effect">
              <Link to="about" spy={true} smooth={true} offset={-400}>
                About{" "}
              </Link>
            </Nav>
            <Nav href="#skills" className="text-white link-hover-effect">
              <Link to="skills" spy={true} smooth={true} offset={-400}>
                Skills
              </Link>
            </Nav>
            <Nav href="#projects" className="text-white link-hover-effect">
              <Link to="projects" spy={true} smooth={true} offset={-400}>
                Projects
              </Link>
            </Nav>
            <Nav href="#contact" className="text-white link-hover-effect">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
