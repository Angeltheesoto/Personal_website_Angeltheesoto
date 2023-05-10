import "./projectpage.css";
import GitHub from "../../misc/github";
import Projects from "../../components/projects/Projects";
import { useParams } from "react-router-dom";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import { MutatingDots } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import React, { useRef } from "react";

interface Props {
  projectData: object[] | any;
}

const Projectpage: React.FC<Props> = ({ projectData }) => {
  const { id } = useParams<{ id?: string }>();
  const newId = id ? parseInt(id) * 1 + 1 : undefined;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Use homepage data
  if (!projectData) {
    return (
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
    );
  } else {
    return (
      <div className="project-container">
        <Helmet>
          <title>Project Page</title>
          <meta
            name="Description"
            content="A collection of projects showcasing my work."
          />
        </Helmet>
        {projectData.map(
          (data: {
            _id: React.Key | null | undefined;
            title: string | undefined;
            content: string | undefined;
            category: string | undefined;
            link: string | undefined;
            imgOne: string | undefined;
            imgTwo: string | undefined;
            imgThree: string | undefined;
          }) =>
            data._id == newId ? (
              <div key={data._id}>
                <FadeInEffect>
                  <h2>{data.title}</h2>
                  {data.category ? (
                    <>
                      <div className="project-video-container">
                        <span className="project-video-link">
                          <a
                            title="github Link"
                            href={data.link}
                            target="_Blank"
                            className="socials project-video-gitlink"
                            rel="noreferrer"
                          >
                            <GitHub />
                          </a>
                        </span>

                        <video
                          src={`/videos/${data.category}`}
                          className="project-video"
                          ref={videoRef}
                          onMouseEnter={handleMouseOver}
                          onMouseLeave={handleMouseOut}
                          loop
                          muted
                        />
                      </div>
                      <div className="project-video-description">
                        {data.content}
                      </div>
                    </>
                  ) : (
                    "loading..."
                  )}
                </FadeInEffect>
              </div>
            ) : null
        )}
        <Projects projectsData={projectData} />
      </div>
    );
  }
};

export default Projectpage;
