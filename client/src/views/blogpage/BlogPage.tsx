import Container from "react-bootstrap/Container";
import "./blogpage.css";
import { MutatingDots } from "react-loader-spinner";
import React from "react";
import { Data } from "../../data";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import Seemore from "../../components/seemore/Seemore";

const Blogs: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const newId = id ? parseInt(id) * 1 + 1 : undefined;

  if (!Data) {
    return (
      <Container id="blog" className="hero-container projects-container">
        <Helmet>
          <title>Blog Page</title>
          <meta name="Description" content="A blog post." />
        </Helmet>
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
    return (
      <>
        <Container>
          <div id="blog" className="blogpage-container">
            {Data &&
              Data?.map((blog: any) =>
                blog.id === newId ? (
                  <FadeInEffect>
                    <h1 className="blogpage-title">{blog.title}</h1>
                    <div className="blogpage-info-container">
                      <span className="blogpage-span">{blog.topic} - </span>
                      <i className="blogpage-timestamp">{blog.timestamp}</i>
                    </div>
                    <div className="blogpage-banner-container">
                      <img
                        src={blog.coverImage}
                        alt="cover image"
                        className="blogpage-banner-image"
                      />
                    </div>
                    <>
                      {blog.paragraphs.map((item: any) => {
                        return (
                          <>
                            <section className="blogpage-section-container">
                              <h3 className="blogpage-subheading">
                                {item.subheading}
                              </h3>
                              <p className="blogpage-text">{item.text}</p>
                              <h3 className="blogpage-subheading">
                                {item.imgSubHeading}
                              </h3>
                              <div className="blogpage-small-image-container">
                                <img
                                  src={item.img}
                                  alt="image"
                                  className="blogpage-small-image"
                                />
                              </div>
                              <h3 className="blogpage-subheading">
                                {item.listSubHeading}
                              </h3>
                              <ul className="blogpage-ul">
                                {item.list.map((li: any) => (
                                  <li className="blogpage-li">{li}</li>
                                ))}
                              </ul>
                              <h3 className="blogpage-subheading">
                                {item.linkSubHeading}
                              </h3>
                              <ul>
                                {item.links.map((link: any) => (
                                  <li>
                                    <a href={link}>{link}</a>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          </>
                        );
                      })}
                    </>
                  </FadeInEffect>
                ) : null
              )}
          </div>
        </Container>
        <div className="blogpage-goback">
          <Seemore link="/blog" text="Go Back" direction="left" />
        </div>
      </>
    );
  }
};
// Go Back

export default Blogs;
