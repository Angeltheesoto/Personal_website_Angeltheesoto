// Dependencies
import React from "react";

// Components
import NavbarEl from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Orbs from "../components/orbs/Orbs";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path == "/") {
    return (
      <React.Fragment>
        <NavbarEl />
        <Container>
          <div className="header-container">
            <div className="box-container">
              <FadeInEffect>
                <Hero />
              </FadeInEffect>
            </div>
            <Orbs />
          </div>
        </Container>
      </React.Fragment>
    );
  } else {
    return <NavbarEl />;
  }
};

export default Header;
