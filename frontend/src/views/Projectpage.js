import React, { useEffect, useState } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import { useParams } from "react-router-dom";
import axios from "axios";

const Projectpage = () => {
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
  // -------------------------------------------------
  const { id } = useParams();
  const [projectData, setProjectData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`http://127.0.0.1:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      // console.log("data is: ", JSON.stringify(data, null, 4));
      setProjectData(data);
    } catch (err) {
      setErr(err.response.data.message);
      // console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="project-container">
      {/* Test Data is passing through */}
      {/* {console.log({ projectData })}
      <h2>{projectData.title}</h2>
      <p>{projectData._id}</p>
      <p>{projectData.content}</p> */}

      <FadeInSection>
        <h2>{projectData.title}</h2>
        <Carousel id="project">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={projectData.imgOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="caption-container">
                <h3>First slide Image</h3>
                <p>See source code on github link below</p>
                <a href={projectData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={projectData.imgTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="caption-container">
                <h3>Second slide Image</h3>
                <p>See source code on github link below</p>
                <a href={projectData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={projectData.imgThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="caption-container">
                <h3>Third slide Image</h3>
                <p>See source code on github link below</p>
                <a href={projectData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </FadeInSection>

      <Projects handleClick={handleClick} />
    </div>
  );
};

export default Projectpage;
