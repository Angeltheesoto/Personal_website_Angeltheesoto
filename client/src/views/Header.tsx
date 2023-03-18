// Dependencies
import React from "react";
import "./views.css";

// Components
import NavbarEl from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Orbs from "../components/orbs/Orbs";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <div className="box-container">
          <NavbarEl />
          <FadeInEffect>
            <Hero />
          </FadeInEffect>
        </div>
        <Orbs />
      </div>
    </>
  );
};

export default Header;
