import "./aboutme.css";
import Seemore from "../seemore/Seemore";
import { useLocation } from "react-router-dom";
import FadeInEffect from "../fadeineffect/FadeInEffect";
import { Helmet } from "react-helmet";

export default function Aboutme() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <div id="about">
      {loc === "/aboutme" ? (
        <div className="info-container space">
          <FadeInEffect>
            <Helmet>
              <title>About Page</title>
              <meta name="Description" content="This is my story." />
            </Helmet>
            <h2 className="aboutme-h2">About Me</h2>
            <p>
              My journey in web-development started when I wanted to create my
              very own e-commerce website, I was curious on how to build such a
              website from scratch. I would spend countless hours and days just
              learning HTML, CSS and javaScript untill I wanted to take things
              more serious. That is when I enrolled myself in a coding boot-camp
              to better develop my skills and to gain real world experiences.
            </p>
            <p>
              As a dedicated and passionate web developer, I specialize in
              leveraging cutting-edge technologies such as React and Nodejs to
              construct robust and scalable web applications. My priority is to
              make a meaningful contribution as a team member, collaborating
              with dedicated professionals to deliver exceptional web solutions
              that enrich the online experience.
            </p>
            <p>
              As a developer, I am always on the lookout for new opportunities
              to expand my knowledge and skills. If you're seeking a highly
              motivated and enthusiastic team player to help create exceptional
              web applications, let's collaborate! You can contact me directly
              with the form below ^_^
            </p>
          </FadeInEffect>
        </div>
      ) : (
        <div className="info-container">
          <h2>About Me</h2>
          <p>
            I am a passionate and inventive Web Developer with a record of
            developing complex web-based applications using best software
            practices.
            <br />
            <br /> I have experience at enhancing user interfaces, writing
            efficient code, and creating dynamic products.
          </p>
          <Seemore link="/aboutme" text="See More" />
        </div>
      )}
    </div>
  );
}
