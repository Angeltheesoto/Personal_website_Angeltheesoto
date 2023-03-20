import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../misc/logo";
import "./nav.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import React from "react";

const NavbarEl: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar className="navbar-container" id="navbar-container">
        <Container className="bootstrap-container">
          <Navbar.Brand>
            <LinkRoute to="/">
              <Logo />
            </LinkRoute>
          </Navbar.Brand>
          <Nav className="me-auto nav-center">
            <Nav className="text-white link-hover-effect">
              <Link to="about" spy={true} offset={-400}>
                About{" "}
              </Link>
            </Nav>
            <Nav className="text-white link-hover-effect">
              <Link to="skills" spy={true} offset={-400}>
                Skills
              </Link>
            </Nav>
            <Nav className="text-white link-hover-effect">
              <Link to="projects" spy={true} offset={-200}>
                Projects
              </Link>
            </Nav>
            <Nav className="text-white link-hover-effect">
              <Link to="contact" spy={true} offset={-200}>
                Contact
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarEl;
