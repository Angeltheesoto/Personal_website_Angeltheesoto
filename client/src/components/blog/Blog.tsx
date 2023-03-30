import React from "react";
import "./blog.css";
import FadeInEffect from "../fadeineffect/FadeInEffect";
import { useLocation } from "react-router-dom";
import Seemore from "../seemore/Seemore";
import Blogs from "../blogs/Blogs";
import { Helmet } from "react-helmet";

interface Props {
  blogData: object[];
}

const Blog: React.FC<Props> = ({ blogData }) => {
  const location = useLocation();
  const loc = location.pathname;

  return (
    <React.Fragment>
      {loc === "/blog" ? (
        <FadeInEffect>
          <Helmet>
            <title>Blog Page</title>
            <meta
              name="Description"
              content="A collection of blogs showcasing my work."
            />
          </Helmet>
          <div className="blog-space blog-container">
            <h2 className="blog-center">Blog</h2>
            <Blogs homepage={false} blogData={blogData} />
          </div>
        </FadeInEffect>
      ) : (
        <div id="blog" className="info-container pos-rel  blog-container">
          <h2 className="blog-center">Blog</h2>
          <Blogs homepage={true} blogData={blogData} />
          <Seemore link="/blog" text="See More" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Blog;
