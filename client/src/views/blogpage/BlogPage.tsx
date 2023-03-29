import Container from "react-bootstrap/Container";
import "./blogpage.css";
import { MutatingDots } from "react-loader-spinner";
import React from "react";
import { Data } from "../../data";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import Seemore from "../../components/seemore/Seemore";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  vs,
  // monokai, use for light/dark mode in furture
  // dracula,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Blogs: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const newId = id ? parseInt(id) * 1 + 1 : undefined;
  const customStyle = {
    padding: "20px",
    borderRadius: "3px",
    overflow: "scroll",
    maxWidth: "50rem",
    margin: "0 auto",
  };

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
                    {blog.coverImage ? (
                      <div className="blogpage-banner-container">
                        <img
                          src={blog.coverImage}
                          alt="cover image"
                          className="blogpage-banner-image"
                        />
                      </div>
                    ) : null}
                    <>
                      <div className="blogpage-width-container">
                        {blog.paragraphs.map((item: any) => {
                          return (
                            <>
                              <section className="blogpage-section-container">
                                {item.subHeading ? (
                                  <h3 className="blogpage-subheading">
                                    {item.subHeading}
                                  </h3>
                                ) : null}
                                {item.text ? (
                                  <p className="blogpage-text">{item.text}</p>
                                ) : null}
                                {item.imgSubHeading ? (
                                  <h3 className="blogpage-subheading">
                                    {item.imgSubHeading}
                                  </h3>
                                ) : null}
                                {item.img ? (
                                  <div className="blogpage-small-image-container">
                                    <img
                                      src={item.img}
                                      alt="image"
                                      className="blogpage-small-image"
                                    />
                                  </div>
                                ) : null}
                                {item.code ? (
                                  <SyntaxHighlighter
                                    showLineNumbers
                                    lineNumberStyle={{
                                      color: "grey",
                                    }}
                                    customStyle={customStyle}
                                    language={item.language}
                                    style={vs}
                                    // style={monokai}
                                    // style={dracula}
                                  >
                                    {item.code}
                                  </SyntaxHighlighter>
                                ) : null}
                                {item.listSubheading ? (
                                  <h3 className="blogpage-subheading">
                                    {item.listSubHeading}
                                  </h3>
                                ) : null}
                                {item.list ? (
                                  <ul className="blogpage-ul">
                                    {item.list.map((li: any) =>
                                      li ? (
                                        <li className="blogpage-li">{li}</li>
                                      ) : null
                                    )}
                                  </ul>
                                ) : null}
                                {item.linkSubHeading ? (
                                  <h3 className="blogpage-subheading">
                                    {item.linkSubHeading}
                                  </h3>
                                ) : null}
                                {item.links ? (
                                  <ul className="blogpage-ul">
                                    {item.links.map((link: any) =>
                                      link ? (
                                        <li className="blogpage-li link">
                                          <a href={link}>{link}</a>
                                        </li>
                                      ) : null
                                    )}
                                  </ul>
                                ) : null}
                              </section>
                            </>
                          );
                        })}
                      </div>
                    </>
                    <div className="blogpage-goback">
                      <Seemore link="/blog" text="Go Back" direction="left" />
                    </div>
                  </FadeInEffect>
                ) : null
              )}
          </div>
        </Container>
      </>
    );
  }
};

export default Blogs;
