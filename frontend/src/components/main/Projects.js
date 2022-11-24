import Container from "react-bootstrap/Container";
import "./main.css";
import { Link as LinkRoute } from "react-router-dom";

function Projects() {
  return (
    <Container id="projects" className="hero-container projects-container">
      <h2>Projects</h2>
      <a href="/project" className="project-links">
        {/* <LinkRoute to="/project"> */}
        <LinkRoute to="/project/1">
          <div className="project-cards link-one">Project 1</div>
        </LinkRoute>
      </a>
      <a href="/" className="project-links ">
        {/* <LinkRoute to="/projectTwo"> */}
        <LinkRoute to="/project/2">
          <div className="project-cards link-two">Project 2</div>
        </LinkRoute>
      </a>
      <a href="/" className="project-links ">
        {/* <LinkRoute to="/projectThree"> */}
        <LinkRoute to="/project/3">
          <div className="project-cards link-three">Project 3</div>
        </LinkRoute>
      </a>
      <a href="/" className="project-links ">
        {/* <LinkRoute to="/projectFour"> */}
        <LinkRoute to="/project/4">
          <div className="project-cards link-four">Project 4</div>
        </LinkRoute>
      </a>
    </Container>
  );
}

export default Projects;
