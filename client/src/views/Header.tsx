// Dependencies
import React from "react";

// Components
import NavbarEl from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Orbs from "../components/orbs/Orbs";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <NavbarEl />
      <div className="header-container">
        <div className="box-container">
          <FadeInEffect>
            <Hero />
          </FadeInEffect>
        </div>
        <Orbs />
      </div>
    </React.Fragment>
  );
};

export default Header;
