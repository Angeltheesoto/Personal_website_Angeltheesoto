import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./main.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

function Projects({ handleClick }) {
  return (
    <Container id="projects" className="hero-container projects-container">
      <h2>Projects</h2>

      <Link
        // href="/project/1"
        className="project-links"
        to="navbar"
        spy={true}
        smooth={false}
        offset={-250}
      >
        <LinkRoute to="/project/1" onClick={handleClick}>
          <div className="project-cards link-one">Project 1</div>
        </LinkRoute>
      </Link>

      <Link
        // href="/project/2"
        className="project-links"
        to="navbar"
        spy={true}
        smooth={false}
        offset={-250}
      >
        <LinkRoute to="/project/2" onClick={handleClick}>
          <div className="project-cards link-two">Project 2</div>
        </LinkRoute>
      </Link>

      <Link
        // href="/project/3"
        className="project-links"
        to="navbar"
        spy={true}
        smooth={false}
        offset={-250}
      >
        <LinkRoute to="/project/3" onClick={handleClick}>
          <div className="project-cards link-three">Project 3</div>
        </LinkRoute>
      </Link>

      <Link
        // href="/project/4"
        className="project-links"
        to="navbar"
        spy={true}
        smooth={false}
        offset={-250}
      >
        <LinkRoute to="/project/4" onClick={handleClick}>
          <div className="project-cards link-four">Project 4</div>
        </LinkRoute>
      </Link>
    </Container>
  );
}

export default Projects;
