import React, { useState, useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const FadeInSection: React.FC<Props> = ({ children }) => {
  const domRef = useRef<HTMLElement>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // There's only one element to observe
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this
        setVisible(true);
        // No need to keep observing
        observer.unobserve(domRef.current!);
      }
    });
    observer.observe(domRef.current!);
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

export default FadeInSection;
