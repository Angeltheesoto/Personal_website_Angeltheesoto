import React, { useEffect, useState } from "react";
import "./views.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../images_icons/github";
import Projects from "../components/main/Projects";
import datas from "../data/notes";
import { useParams } from "react-router-dom";
import axios from "axios";

const Projectpage = () => {
  // -----------------------------------------------
  // gets the file-name
  const { id } = useParams();
  const [newData, setNewData] = useState();

  // Fetches the data from data-folder
  const fetchData = async () => {
    const { data } = await axios.get(`http://127.0.0.1:5000/project/${id}`);
    // console.log(data);
    // setNewData(data);
    // console.log(newData.title);
  };

  // Runs the function on page load
  useEffect(() => {
    fetchData();
  }, []);
  // -------------------------------------------------
  // Console log the setNewData to show the data thats passed for that page. When refreshed the data becomes undefined. I think i have to add an onclick when the button is clicked the data changes to match what the url is on. Uncomment the comment above the map jsx below.

  return (
    <div className="project-container">
      {/* <>
        <h2>{newData.title}</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={newData.imgOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="caption-container">
                <h3>First slide Image</h3>
                <p>See source code on github link below</p>
                <a href={newData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={newData.imgTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="caption-container">
                <h3>Second slide Image</h3>
                <p>See source code on github link below</p>
                <a href={newData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={newData.imgThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="caption-container">
                <h3>Third slide Image</h3>
                <p>See source code on github link below</p>
                <a href={newData.link} target="_Blank" className="socials">
                  <GitHub />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </> */}
      {/* <h2>{newData.title}</h2> */}
      {datas.map((data) => {
        if (data._id == id) {
          return (
            <>
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
