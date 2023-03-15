import Container from "react-bootstrap/Container";
import "./projects.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

function Projects({ projectsData }) {
  if (!projectsData) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container id="projects" className="hero-container projects-container">
        <h2>Projects</h2>
        {projectsData?.map((item) => (
          <>
            <Link
              className="project-links"
              to="navbar"
              spy={true}
              smooth={false}
              offset={800}
              key={item._id}
            >
              <LinkRoute to={`/project/${item._id - 1}`} id="double_click">
                <div className="project-cards link-one">{item.title}</div>
              </LinkRoute>
            </Link>
          </>
        ))}
      </Container>
    );
  }
}

export default Projects;
