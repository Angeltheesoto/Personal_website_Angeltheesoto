import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images_icons/logo";
import "./header.css";
import { Link } from "react-scroll";

export default function NavbarEl() {
  return (
    <>
      <Navbar className="navbar-container">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Nav className="me-auto nav-center ">
            <Link to="about" spy={true} smooth={true} offset={-400}>
              <Nav.Link href="#about" className="text-white link-hover-effect">
                About{" "}
              </Nav.Link>
            </Link>
            <Nav.Link href="#skills" className="text-white link-hover-effect">
              <Link to="skills" spy={true} smooth={true} offset={-400}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white link-hover-effect">
              <Link to="projects" spy={true} smooth={true} offset={-400}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white link-hover-effect">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
