import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../misc/logo";
import "./nav.css";
import { Link } from "react-scroll";
import { Link as LinkRoute, useLocation } from "react-router-dom";
import React, { useState } from "react";

const NavbarEl: React.FC = () => {
  const location = useLocation();
  const loc = location.pathname;
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
    console.log(isShown);
  };

  return (
    <React.Fragment>
      <Navbar className="navbar-container" id="navbar-container">
        <Container className="bootstrap-container">
          <Navbar.Brand>
            <LinkRoute to="/">
              <Logo />
            </LinkRoute>
          </Navbar.Brand>
          {loc === "/" ? (
            <React.Fragment>
              {/* this is the regular sidebar when its not in mobile view */}
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
                  <Link to="skills" spy={true} offset={-400}>
                    Education
                  </Link>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <Link to="projects" spy={true} offset={-200}>
                    Projects
                  </Link>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <Link to="blog" spy={true} offset={-200}>
                    Blog
                  </Link>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <Link to="contact" spy={true} offset={-200}>
                    Contact
                  </Link>
                </Nav>
              </Nav>
              {/* this handles the click to show the sidebar */}

              <div className="nav-hamburger-container" onClick={handleClick}>
                <div
                  className={`nav-hamburger-icon ${isShown ? "change" : ""}`}
                >
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </div>
              </div>

              {/* this is the dropdown menu */}
              <div
                className={`nav-sidebar-container ${
                  isShown ? "nav-sidebar-show" : ""
                }`}
              >
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="about"
                    spy={true}
                    offset={-400}
                    onClick={handleClick}
                  >
                    About{" "}
                  </Link>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="skills"
                    spy={true}
                    offset={-400}
                    onClick={handleClick}
                  >
                    Skills
                  </Link>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="education"
                    spy={true}
                    offset={-400}
                    onClick={handleClick}
                  >
                    Education
                  </Link>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="projects"
                    spy={true}
                    offset={-200}
                    onClick={handleClick}
                  >
                    Projects
                  </Link>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="blog"
                    spy={true}
                    offset={-200}
                    onClick={handleClick}
                  >
                    Blog
                  </Link>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="contact"
                    spy={true}
                    offset={-200}
                    onClick={handleClick}
                  >
                    Contact
                  </Link>
                </Nav>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Nav className="me-auto nav-center">
                <Nav className="text-white link-hover-effect">
                  <LinkRoute to="/aboutme">About</LinkRoute>{" "}
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <LinkRoute to="/skills">Skills</LinkRoute>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <LinkRoute to="/education">Education</LinkRoute>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <LinkRoute to="/project/0">Projects</LinkRoute>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <LinkRoute to="/blog">Blog</LinkRoute>
                </Nav>
                <Nav className="text-white link-hover-effect">
                  <Link to="contact" spy={true} offset={-200}>
                    Contact
                  </Link>
                </Nav>
              </Nav>
              <div className="nav-hamburger-container" onClick={handleClick}>
                <div
                  className={`nav-hamburger-icon ${isShown ? "change" : ""}`}
                >
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </div>
              </div>
              <div
                className={`nav-sidebar-container ${
                  isShown ? "nav-sidebar-show" : ""
                }`}
              >
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <LinkRoute to="/aboutme" onClick={handleClick}>
                    About
                  </LinkRoute>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <LinkRoute to="/skills" onClick={handleClick}>
                    Skills
                  </LinkRoute>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <LinkRoute to="/education" onClick={handleClick}>
                    Education
                  </LinkRoute>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <LinkRoute to="/project/0" onClick={handleClick}>
                    Projects
                  </LinkRoute>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <LinkRoute to="/Blog" onClick={handleClick}>
                    Blog
                  </LinkRoute>
                </Nav>
                <Nav
                  className={`link-hover-effect nav-sidebar-center ${
                    isShown ? "nav-sidebar-visible" : ""
                  }`}
                >
                  <Link
                    to="contact"
                    spy={true}
                    offset={-200}
                    onClick={handleClick}
                  >
                    Contact
                  </Link>
                </Nav>
              </div>
            </React.Fragment>
          )}
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarEl;
