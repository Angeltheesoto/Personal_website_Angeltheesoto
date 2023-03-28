// Dependencies
import "./homepage.css";

// Components
import Orbs from "../../components/orbs/Orbs";
import Aboutme from "../../components/aboutme/Aboutme";
import Orbs2 from "../../components/orbs/Orbs2";
import Skills from "../../components/skills/Skills";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import React from "react";
import Blog from "../../components/blog/Blog";

interface Props {
  homePageData: object[];
}

const Homepage: React.FC<Props> = ({ homePageData }) => {
  return (
    <React.Fragment>
      <div className="header-container flex-row-reverse">
        <div className="box-container">
          <FadeInEffect>
            <Aboutme />
          </FadeInEffect>
        </div>
        <Orbs2 />
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
        <div className="box-container">
          <FadeInEffect>
            <Projects projectsData={homePageData} />
          </FadeInEffect>
        </div>
        <Orbs />
      </div>
      {/* margin-bottom */}
      <div className="header-container ">
        <FadeInEffect>
          <Blog />
        </FadeInEffect>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
