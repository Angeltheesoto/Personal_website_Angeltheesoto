import React, { useEffect, useState } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import { useParams } from "react-router-dom";
import axios from "axios";
import getProjectsApi from "../api/api";

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
  let newId = id * 1 + 1;
  // const [projectData, setProjectData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    setIsLoading(true);
    getProjectsApi().then((projects) => setData(projects));
  };

  useEffect(() => {
    handleClick();
  }, []);

  const newData = data.filter((e) => e._id == newId);
  // console.log(`url id:${newId}, data id: ${data._id}`);

  // const projectItems = newData.map((data) => (
  //   <h2 key={data._id} id={data._id}>
  //     {data.title}
  //   </h2>
  // ));

  return (
    <div className="project-container">
      {/* Test Data is passing through */}
      {/* {projectItems} */}

      {newData &&
        newData.map((data) => (
          <div key={data._id}>
            <FadeInSection>
              <h2 key={data._id}>{data.title}</h2>
              <Carousel id="project">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.imgOne}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>First slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={data.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.imgTwo}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>Second slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={data.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.imgThree}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>Third slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={data.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </FadeInSection>
          </div>
        ))}

      <Projects handleClick={handleClick} />
    </div>
  );
};

export default Projectpage;
