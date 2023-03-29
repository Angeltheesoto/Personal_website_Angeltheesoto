import Container from "react-bootstrap/Container";
import "./blogs.css";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import React from "react";
import { Data } from "../../data";

interface Props {
  homepage: boolean;
}

const Blogs: React.FC<Props> = ({ homepage }) => {
  const filterData = Data.filter((item) => item.id < 5);

  if (!Data) {
    return (
      <Container id="blog" className="hero-container projects-container">
        <MutatingDots
          height="100"
          width="100"
          color="red"
          secondaryColor="red"
          radius="20.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader-container"
          visible={true}
        />
      </Container>
    );
  } else {
    if (homepage === true) {
      return (
        <div id="blog" className="blogs-container">
          {filterData?.map((data: any) => (
            <React.Fragment>
              <div className="project-links">
                <LinkRoute to={`/blog/${data.id - 1}`} id="double_click">
                  <div className={`blogs-item-container ${data.topic}`}>
                    <h5 className="blogs-title">{data.title}</h5>
                    <p className="blogs-desc">{data.desc}</p>
                    <span className="blogs-topic">{data.topic} </span> -
                    <i> {data.timestamp}</i>
                  </div>
                </LinkRoute>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return (
        <div id="blog" className="blogs-container">
          {Data?.map((data: any) => (
            <React.Fragment>
              <div className="project-links">
                <LinkRoute to={`/blog/${data.id - 1}`} id="double_click">
                  <div className={`blogs-item-container ${data.topic}`}>
                    <h5 className="blogs-title">{data.title}</h5>
                    <p className="blogs-desc">{data.desc}</p>
                    <span className="blogs-topic">{data.topic} </span> -
                    <i> {data.timestamp}</i>
                  </div>
                </LinkRoute>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    }
  }
};

export default Blogs;
