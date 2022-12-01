// Dependencies
import React, { useState, useRef, useEffect } from "react";
import "./views.css";

// Components
import Lava from "../components/main/Lava";
import Aboutme from "../components/main/Aboutme";
import Lava2 from "../components/main/Lava2";
import Skills from "../components/main/Skills";
import Education from "../components/main/Education";
import Projects from "../components/main/Projects";

function Homepage() {
  // Fade effect
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
    <>
      <div className="header-container flex-row-reverse">
        <div className="box-container">
          <FadeInSection>
            <Aboutme />
          </FadeInSection>
        </div>
        <Lava2 />
      </div>
      <div className="header-container">
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Education />
        </FadeInSection>
      </div>
      <div className="header-container margin-bottom">
        <div className="box-container">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </div>
        <Lava />
      </div>
    </>
  );
}

export default Homepage;
