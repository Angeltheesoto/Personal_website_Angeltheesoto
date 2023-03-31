import React from "react";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import FadeInEffect from "../fadeineffect/FadeInEffect";
import { Helmet } from "react-helmet";

export default function Education() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <React.Fragment>
      {loc === "/education" ? (
        <FadeInEffect>
          <Helmet>
            <title>Education Page</title>
            <meta name="Description" content="A timeline of my education." />
          </Helmet>
          <div className="space">
            <h2 className="text-center">Education</h2>
            <div className="education-timeline-container d-flex justify-content-center">
              <div className="education-icon-container d-flex flex-column bd-highlight mb-3 justify-content-between">
                <SchoolIcon sx={{ color: "white" }} />
                <div className="vl"></div>
                <SchoolIcon sx={{ color: "white" }} />
                <div className="vl"></div>
                <SchoolIcon sx={{ color: "white" }} />
              </div>
              <div>
                <div className="education-school-container">
                  <h5>Zero to Mastery</h5>
                  <p>Online | Data Structures and Algorithms</p>
                  <i>December 2022 - February 2023</i>
                </div>
                <div className="education-school-container">
                  <h5>New Jersey Institute of Technology</h5>
                  <p>Newark, NJ | Software Development</p>
                  <i>February 2022 - November 2022</i>
                </div>
                <div className="education-school-container">
                  <h5>Hostos Community College</h5>
                  <p>Bronx, NY | Digital Design and Animation</p>
                  <i>September 2017 - May 2020</i>
                </div>
              </div>
            </div>
          </div>
        </FadeInEffect>
      ) : (
        <div id="education" className="info-container2 pos-rel ">
          <h2>Education</h2>
          <p>
            I have recently graduated in November 2022 fom NJIT coding boot
            camp. With a strong understanding on MERN stack applications.
            <br />
            <br /> I graduated from Hostos community college in May 2020 with an
            associates for digital design and animation.
          </p>
          <Seemore link="/education" text="See More" />
        </div>
      )}
    </React.Fragment>
  );
}
