// Dependencies
import React, { useState } from "react";

// Components
import NavbarEl from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
// import Orbs from "../components/orbs/Orbs";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";
import { useLocation } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let [mouseLocation, setMouseLocation]: Object | any = useState({});
  const handleMouseMove = (e: Event) => {
    // !move eyes
    const eye = document.querySelector(".eye");
    const eyeRect = eye.getBoundingClientRect();
    const yPos = e.clientY;
    const xPos = e.clientX;
    const deltaX = eyeRect.x + eyeRect.width / 2 - xPos;
    const deltaY = eyeRect.y + eyeRect.height / 2 - yPos;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    setMouseLocation({ x: xPos, y: yPos, deg: angle });

    // !tilt the face
    const container = document.querySelector(".eyesHead");
    const containerRect = container.getBoundingClientRect();
    const mouseXRelativeToContainer =
      xPos - containerRect.x - containerRect.width / 2;
    const mouseYRelativeToContainer =
      yPos - containerRect.y - containerRect.height / 2;
    const containerXAngle =
      50 * (mouseXRelativeToContainer / window.innerWidth);
    const containerYAngle =
      -50 * (mouseYRelativeToContainer / window.innerWidth);

    container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");
    container.style.setProperty("--xAngle", containerXAngle.toFixed(2) + "deg");
    container.style.setProperty("--yAngle", containerYAngle.toFixed(2) + "deg");
  };

  if (path == "/") {
    return (
      <React.Fragment>
        <NavbarEl />
        <div className="eyesContainer" onMouseMove={handleMouseMove}>
          <div className="header-container header-top">
            <div className="box-container">
              <FadeInEffect>
                <Hero />
              </FadeInEffect>
            </div>
          </div>

          <div className="eyesHead">
            <div
              className="eye"
              style={{ transform: `rotate(${mouseLocation.deg}deg)` }}
            >
              <div className="pupil"></div>
            </div>
            <div
              className="eye"
              style={{ transform: `rotate(${mouseLocation.deg}deg)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <NavbarEl />;
  }
};

export default Header;
