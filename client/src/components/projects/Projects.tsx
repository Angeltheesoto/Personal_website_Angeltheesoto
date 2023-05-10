import Container from "react-bootstrap/Container";
import "./projects.css";
import { Link as LinkRoute } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import React from "react";

interface Props {
  projectsData: object[];
}

const Projects: React.FC<Props> = ({ projectsData }) => {
  if (!projectsData) {
    return (
      <Container id="projects" className="hero-container projects-container">
        <MutatingDots
          height="100"
          width="100"
          color="red"
          secondaryColor="red"
          radius="20.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader-container"
          visible={true}
        />
      </Container>
    );
  } else {
    return (
      <Container id="projects" className="hero-container">
        <h2>Projects</h2>
        {projectsData?.map((item: any) => (
          <React.Fragment key={item.title}>
            <div className="project-links">
              <LinkRoute to={`/project/${item._id - 1}`} id="double_click">
                <div className="project-cards link-one">{item.title}</div>
              </LinkRoute>
            </div>
          </React.Fragment>
        ))}
      </Container>
    );
  }
};

export default Projects;
