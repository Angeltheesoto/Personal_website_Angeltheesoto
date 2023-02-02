// Dependencies
import React, { useEffect } from "react";
import "./views.css";

// Components
import Contact from "../components/footer/Contact";
import Map from "../components/footer/Map";

function Footer({ envData }) {
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

  // console.log(envData);

  return (
    <>
      <FadeInSection>
        <Contact />
        <Map envData={envData} />
      </FadeInSection>
    </>
  );
}

export default Footer;
