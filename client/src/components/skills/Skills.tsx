import React from "react";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import "./skills.css";
import FadeInEffect from "../fadeineffect/FadeInEffect";

const Skills: React.FC = () => {
  const location = useLocation();
  const loc = location.pathname;

  return (
    <div id="skills" className="info-container pos-rel">
      {loc === "/skills" ? (
        <FadeInEffect>
          <div className="skills-space">
            <h2 id="newtop" className="text-center">
              Skills
            </h2>
            <div className="skills-flex-container">
              <div className="skills-container">
                <h3>HTML</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">95%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "95%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>CSS</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">85%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "85%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>JavaScript</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">75%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "75%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>React</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">65%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "65%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>Redux</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">40%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "40%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>Bootstrap</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">45%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "45%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>Python</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">60%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "60%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>NodeJS</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">55%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "55%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>MongoDB</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">65%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "65%" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="skills-container">
                <h3>Git</h3>
                <div className="skills-percent-container">
                  <p className="skills-percent">70%</p>
                  <hr
                    className="skills-percent-bar"
                    style={{ "--percent": "70%" } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInEffect>
      ) : (
        <React.Fragment>
          <h2>Skills</h2>
          <div className="skills-container skills-fix-width">
            <h3>HTML</h3>
            <div className="skills-percent-container">
              <p className="skills-percent">95%</p>
              <hr
                className="skills-percent-bar"
                style={{ "--percent": "95%" } as React.CSSProperties}
              />
            </div>
          </div>
          <div className="skills-container skills-fix-width">
            <h3>CSS</h3>
            <div className="skills-percent-container">
              <p className="skills-percent">85%</p>
              <hr
                className="skills-percent-bar"
                style={{ "--percent": "85%" } as React.CSSProperties}
              />
            </div>
          </div>
          <div className="skills-container skills-fix-width">
            <h3>JavaScript</h3>
            <div className="skills-percent-container">
              <p className="skills-percent">75%</p>
              <hr
                className="skills-percent-bar"
                style={{ "--percent": "75%" } as React.CSSProperties}
              />
            </div>
          </div>
          <Seemore link="/skills" />
        </React.Fragment>
      )}
    </div>
  );
};

export default Skills;
