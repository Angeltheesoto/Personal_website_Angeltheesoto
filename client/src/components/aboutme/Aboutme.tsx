import "./aboutme.css";
import Seemore from "../seemore/Seemore";
import { useLocation } from "react-router-dom";

export default function Aboutme() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <div id="about">
      {loc === "/aboutme" ? (
        <div className="info-container">
          <h2>About Me</h2>
          <p>
            I am a passionate and inventive Entry-Level Web Developer with a
            record of developing complex web-based applications using best
            software practices.
            <br />
            <br /> Experienced at enhancing user interfaces, writing efficient
            code, and creating dynamic products.
          </p>
        </div>
      ) : (
        <div className="info-container">
          <h2>About Me</h2>
          <p>
            I am a passionate and inventive Entry-Level Web Developer with a
            record of developing complex web-based applications using best
            software practices.
            <br />
            <br /> Experienced at enhancing user interfaces, writing efficient
            code, and creating dynamic products.
          </p>
          <Seemore link="/aboutme" />
        </div>
      )}
    </div>
  );
}
