import "./projectpage.css";
import Carousel from "react-bootstrap/Carousel";
import GitHub from "../../misc/github";
import Projects from "../../components/projects/Projects";
import { useParams } from "react-router-dom";
import FadeInEffect from "../../components/fadeineffect/FadeInEffect";
import { MutatingDots } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Projectpage = ({ homePageData }) => {
  const { id } = useParams();
  const newId = id * 1 + 1;

  // Use homepage data
  if (!homePageData) {
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
        {homePageData.map((data) =>
          data._id == newId ? (
            <div key={data._id}>
              <FadeInEffect>
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
                        <h3>{data.title}</h3>
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
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={data.imgThree}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </FadeInEffect>
            </div>
          ) : null
        )}
        <Projects projectsData={homePageData} />
      </div>
    );
  }
};

export default Projectpage;
