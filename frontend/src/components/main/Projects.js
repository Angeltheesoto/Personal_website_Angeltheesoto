import Container from "react-bootstrap/Container";
import "./main.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container id="projects" className="hero-container projects-container">
      <h2>Projects</h2>
      <a href="/project" className="project-links">
        <Link to="/project">
          <div className="project-cards link-one">Project 1</div>
        </Link>
      </a>
      <a href="#" className="project-links ">
        <div className="project-cards link-two">Project 2</div>
      </a>
      <a href="#" className="project-links ">
        <div className="project-cards link-three">Project 3</div>
      </a>
      <a href="#" className="project-links ">
        <div className="project-cards link-four">Project 4</div>
      </a>
    </Container>
  );
}

export default Projects;
