// Dependencies
import "./homepage.css";

// Components
import Aboutme from "../../components/aboutme/Aboutme";
import Skills from "../../components/skills/Skills";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import React from "react";
import Blog from "../../components/blog/Blog";
import Character from "../../components/character/Character";

interface Props {
  projectData: object[];
  blogData: object[];
}

const Homepage: React.FC<Props> = ({ projectData, blogData }) => {
  return (
    <React.Fragment>
      <div className="header-container ">
        <div className="box-container">
          <FadeInEffect>
            <Projects projectsData={projectData} />
          </FadeInEffect>
        </div>
      </div>
      <div className="header-container flex-row-reverse">
        <div className="box-container">
          <FadeInEffect>
            <Aboutme />
          </FadeInEffect>
        </div>
        <FadeInEffect>
          <Character />
        </FadeInEffect>
      </div>
      <div className="header-container">
        <FadeInEffect>
          <Skills />
        </FadeInEffect>
        <FadeInEffect>
          <Education />
        </FadeInEffect>
      </div>
      <div className="header-container ">
        <FadeInEffect>
          <Blog blogData={blogData} />
        </FadeInEffect>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
