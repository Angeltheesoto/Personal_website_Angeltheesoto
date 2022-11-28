import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./main.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

function Projects({ handleClick }) {
  return (
    <Container id="projects" className="hero-container projects-container">
      <h2>Projects</h2>
      <a href="/project" className="project-links">
        <Link to="project" spy={true} smooth={false} offset={-250}>
          <LinkRoute to="/project/1" onClick={handleClick}>
            <div className="project-cards link-one">Project 1</div>
          </LinkRoute>
        </Link>
      </a>
      <a href="/" className="project-links ">
        <Link to="project" spy={true} smooth={false} offset={-250}>
          <LinkRoute to="/project/2" onClick={handleClick}>
            <div className="project-cards link-two">Project 2</div>
          </LinkRoute>
        </Link>
      </a>
      <a href="/" className="project-links ">
        <Link to="project" spy={true} smooth={false} offset={-250}>
          <LinkRoute to="/project/3" onClick={handleClick}>
            <div className="project-cards link-three">Project 3</div>
          </LinkRoute>
        </Link>
      </a>
      <a href="/" className="project-links ">
        <Link to="project" spy={true} smooth={false} offset={-250}>
          <LinkRoute to="/project/4" onClick={handleClick}>
            <div className="project-cards link-four">Project 4</div>
          </LinkRoute>
        </Link>
      </a>
    </Container>
  );
}

export default Projects;
