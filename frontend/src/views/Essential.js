// Dependencies
import Container from "react-bootstrap/Container";
import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";

// Components
import NavbarEl from "../components/header/nav";
import Hero from "../components/header/hero";
import Lava from "../components/main/Lava";
import Contact from "../components/footer/Contact";
import Map from "../components/footer/Map";
import Homepage from "./Homepage";

function Essential() {
  const FadeInSection = ({ children }) => {
    const domRef = React.useRef();

    const [isVisible, setVisible] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        // There's only one element to observe
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this
          setVisible(true);
          // No need to keep observing
          observer.unobserve(domRef.current);
        }
      });

      observer.observe(domRef.current);

      return () => observer.disconnect();
    }, []);

    return (
      <section
        ref={domRef}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        {children}
      </section>
    );
  };

  return (
    <div className="app-container">
      <Container>
        <div className="header-container">
          <div className="box-container">
            <NavbarEl />
            <FadeInSection>
              <Hero />
            </FadeInSection>
          </div>
          <Lava />
        </div>
        {/* This is where we change the content - set routes. */}
        {<Homepage />}
        {/* This is where we change the content - set routes. */}
        <FadeInSection>
          <Contact />
          <Map />
        </FadeInSection>
      </Container>
    </div>
  );
}

export default Essential;
