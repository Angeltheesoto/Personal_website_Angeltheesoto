import React, { useEffect, useState } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import { useParams } from "react-router-dom";
import axios from "axios";
// import displayData from "../data/data";

const Projectpage = ({ homePageData }) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  // const [data, setData] = useState();
  // const [newData, setNewData] = useState();

  // const handleClick = async (e) => {
  //   try {
  // This filters the data passed from app.js(homePageData)
  // console.log(`all homePageData: `, homePageData);
  // let test = homePageData.filter((e) => e._id == newId);
  // setData((prevData) => (prevData = test));
  //   } catch (error) {
  //     console.error(`Data did not update. Error: ${error}`);
  //   }
  // };
  // useEffect(() => {
  //   handleClick();
  // }, []);

  // This is for Demonstration for seeing how homePageData is being passed into projectpage.js
  // let mappingId = homePageData.map((val, i) => {
  //   return val._id, i;
  // });
  // console.log(`Filtering: `, mappingId);
  return (
    <div className="project-container">
      {/* {homePageData.map((val) => {
        return <h1 key={val._id}>{val.title}</h1>;
      })} */}
      {homePageData.map((data) =>
        data._id == newId ? (
          // ? <h1 key={val._id}>{val.title}</h1>
          <div key={data._id}>
            <FadeInSection>
              <h2>{data.title}</h2>
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
        ) : null
      )}

      {/* <Projects handleClick={handleClick} /> */}
      <Projects />
    </div>
  );
};

export default Projectpage;
