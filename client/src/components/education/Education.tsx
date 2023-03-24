import React from "react";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import "./education.css";
import SchoolIcon from "@mui/icons-material/School";

export default function Education() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <div className="info-container2 pos-rel ">
      {loc === "/education" ? (
        <React.Fragment>
          <h2>Education</h2>

          <div className="education-timeline-container d-flex ">
            <div className="education-icon-container d-flex flex-column bd-highlight mb-3 justify-content-between">
              <SchoolIcon sx={{ color: "white" }} />
              <div className="vl"></div>
              <SchoolIcon sx={{ color: "white" }} />
              <div className="vl"></div>
              <SchoolIcon sx={{ color: "white" }} />
            </div>
            <div>
              <div className="education-school-container">
                <h5>Hostos Community College</h5>
                <p>Bronx, NY | Digital Design and Animation</p>
                <i>September 2017 - May 2020</i>
              </div>
              <div className="education-school-container">
                <h5>Hostos Community College</h5>
                <p>Bronx, NY | Digital Design and Animation</p>
                <i>September 2017 - May 2020</i>
              </div>
              <div className="education-school-container">
                <h5>Hostos Community College</h5>
                <p>Bronx, NY | Digital Design and Animation</p>
                <i>September 2017 - May 2020</i>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>Education</h2>
          <p>
            I have recently graduated in November 2022 fom NJIT coding boot
            camp. With a strong understanding on MERN stack applications.
            <br />
            <br /> I graduated from Hostos community college in May 2020 with an
            associates for digital design and animation.
          </p>
          <Seemore link="/education" />
        </React.Fragment>
      )}
    </div>
  );
}
