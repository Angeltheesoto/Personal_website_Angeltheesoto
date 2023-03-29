export const Data = [
  {
    id: 1,
    title: "How to Create this Component",
    topic: "react",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "main sub-heading",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgSubHeading: "img Sub-Heading",
        img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        listSubHeading: "list sub-Heading",
        list: ["one", "two", "three"],
        linkSubHeading: "link sub-heading",
        links: [
          "https://react-bootstrap.github.io/components/images/",
          "https://react-bootstrap.github.io/components/images/",
          "https://react-bootstrap.github.io/components/images/",
        ],
        code: `import Container from "react-bootstrap/Container";
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
  tomorrow,
  github,
  dracula,
  vs,
  monokai,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
                              <SyntaxHighlighter
                                language="javascript"
                                // style={vs}
                                // style={dracula}
                                // style={github}
                                style={monokai}
                              >
                                {item.code}
                              </SyntaxHighlighter>
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
                              <ul className="blogpage-ul">
                                {item.links.map((link: any) => (
                                  <li className="blogpage-li">
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
};`,
        language: "javascript",
      },
      {
        subheading: "main sub-heading",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
        imgSubHeading: "img Sub-Heading",
        img: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        listSubHeading: "list sub-Heading",
        list: ["one", "two", "three"],
        linkSubHeading: "link sub-heading",
        links: ["linkeone", "linktwo", "linkthree"],
        code: "",
        language: "javascript",
      },
      {
        subheading: "main sub-heading",
        text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
        imgSubHeading: "img Sub-Heading",
        img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        listSubHeading: "list sub-Heading",
        list: ["one", "two", "three"],
        linkSubHeading: "link sub-heading",
        links: ["linkeone", "linktwo", "linkthree"],
        code: "",
        language: "javascript",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 2,
    title: "How to Deploy",
    topic: "nodejs",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage: "",
    timestamp: "June 12th, 2023",
  },
  {
    id: 3,
    title: "How to build frontend",
    topic: "react",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 4,
    title: "How to build backend",
    topic: "nodejs",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 5,
    title: "How to build Another thing",
    topic: "html",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 6,
    title: "How to build that thing",
    topic: "css",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 7,
    title: "How to build that thing",
    topic: "javascript",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
  {
    id: 8,
    title: "How to build that thing in python",
    topic: "python",
    desc: "In this article I will discuss how to make this component.",
    paragraphs: [
      {
        subHeading: "",
        text: "",
        imgSubHeading: "",
        img: "",
        listSubHeading: "",
        list: [""],
        linkSubHeading: "",
        links: [""],
        code: "",
        language: "",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    timestamp: "5 min ago",
  },
];
