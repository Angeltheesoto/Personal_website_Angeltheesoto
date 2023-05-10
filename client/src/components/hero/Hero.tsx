import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./hero.css";
import GitHub from "../../misc/github";
import LinkedIn from "../../misc/linkedin";
import Instagram from "../../misc/Instagram";
import Typewritter from "typewriter-effect";

function Hero() {
  return (
    <Container id="hero" className="hero-reverse-container">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link
          className="socials"
          href="https://github.com/Angeltheesoto"
          target="_Blank"
          rel="noreferrer"
        >
          <GitHub />
        </Nav.Link>
        <Nav.Link
          eventKey="link-1"
          href="https://www.linkedin.com/in/angel-soto-a19a04233/"
          target="_Blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </Nav.Link>
        <Nav.Link
          eventKey="link-2"
          href="https://www.instagram.com/angeltheesoto/"
          target="_Blank"
          rel="noreferrer"
        >
          <Instagram />
        </Nav.Link>
      </Nav>
      <Nav className="hero-text">
        <div>
          <h1>Angel Soto</h1>
          <div className="hero-sub-text-container">
            <h3 className="hero-space">I am a</h3>
            <h3>
              <Typewritter
                options={{
                  strings: [
                    "web developer",
                    "front-end developer",
                    "back-end developer",
                    "digital designer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 110,
                }}
              />
            </h3>
          </div>
        </div>
      </Nav>
    </Container>
  );
}

export default Hero;
// npm i --save-dev @types/react-typical
