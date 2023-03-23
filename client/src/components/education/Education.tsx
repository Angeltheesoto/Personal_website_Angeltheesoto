import React from "react";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import "./education.css";

export default function Education() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <div className="info-container2 pos-rel ">
      {loc === "/education" ? (
        <React.Fragment>
          <h2>Education</h2>
          <p>
            I have recently graduated in November 2022 fom NJIT coding boot
            camp. With a strong understanding on MERN stack applications.
            <br />
            <br /> I graduated from Hostos community college in May 2020 with an
            associates for digital design and animation.
          </p>
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
