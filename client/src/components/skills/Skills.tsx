import React from "react";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import "./skills.css";

const Skills: React.FC = () => {
  const location = useLocation();
  const loc = location.pathname;

  return (
    <div id="skills" className="info-container pos-rel">
      {loc === "/skills" ? (
        <React.Fragment>
          <h2 id="newtop">Skills</h2>
          <div className="skills-li-container">
            <ul>
              <li>HTML | CSS</li>
              <li>Python</li>
              <li>JavaScript | React | Redux</li>
              <li>NodeJS</li>
            </ul>
            <ul>
              <li>SQL | NoSQL</li>
              <li>MongoDB | PostgreSQL</li>
              <li>Git | GitHub</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>Skills</h2>
          <div className="skills-li-container">
            <ul>
              <li>HTML | CSS</li>
              <li>Python</li>
              <li>JavaScript | React | Redux</li>
              <li>NodeJS</li>
            </ul>
            <ul>
              <li>SQL | NoSQL</li>
              <li>MongoDB | PostgreSQL</li>
              <li>Git | GitHub</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <Seemore link="/skills" />
        </React.Fragment>
      )}
    </div>
  );
};

export default Skills;
