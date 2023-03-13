import React, { useEffect } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import { useParams } from "react-router-dom";

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
  // Fade effect
  const { id } = useParams();
  const newId = id * 1 + 1;
  const LS = JSON.parse(localStorage.getItem("homepagedata"));

  // This is for Demonstration for seeing how homePageData is being passed into projectpage.js
  // let mappingId = homePageData.map((val, i) => {
  //   return val._id, i;
  // });
  // console.log(`Filtering: `, mappingId);

  // Use homepage data
  if (!homePageData) {
    return (
      <div className="project-container" id="showPrjects">
        {/* {homePageData.map((val) => {
        return <h1 key={val._id}>{val.title}</h1>;
      })} */}
        {LS.map((data) =>
          data._id == newId ? (
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
        <Projects projectsData={LS} />
      </div>
    );
  } else {
    return (
      <div className="project-container" id="showPrjects">
        {homePageData.map((data) =>
          data._id == newId ? (
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
        <Projects projectsData={homePageData} />
      </div>
    );
  }
};

export default Projectpage;
