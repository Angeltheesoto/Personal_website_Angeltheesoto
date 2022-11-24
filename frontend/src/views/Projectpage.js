import React, { useEffect } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import notes from "../data/notes";
import { useParams } from "react-router-dom";

const Projectpage = () => {
  const { id } = useParams();

  return (
    <div className="project-container">
      {notes.map((note) => {
        if (note._id == id) {
          return (
            <>
              <h2>{note.title}</h2>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={note.imgOne}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>First slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={note.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={note.imgTwo}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>Second slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={note.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={note.imgThree}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div className="caption-container">
                      <h3>Third slide Image</h3>
                      <p>See source code on github link below</p>
                      <a href={note.link} target="_Blank" className="socials">
                        <GitHub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </>
          );
        }
      })}
      ;
      <Projects />
    </div>
  );
};

export default Projectpage;
