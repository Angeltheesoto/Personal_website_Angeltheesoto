import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./hero.css";
import GitHub from "../../misc/github";
import LinkedIn from "../../misc/linkedin";
import Instagram from "../../misc/Instagram";

function Hero() {
  return (
    <Container id="hero" className="hero-container">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link
          href="https://github.com/Angeltheesoto"
          target="_Blank"
          className="socials"
        >
          <GitHub />
        </Nav.Link>
        <Nav.Link
          eventKey="link-1"
          href="https://www.linkedin.com/in/angel-soto-a19a04233/"
          target="_Blank"
        >
          <LinkedIn />
        </Nav.Link>
        <Nav.Link
          eventKey="link-2"
          // href="https://www.instagram.com/angeltheesoto/"
          target="_Blank"
        >
          <Instagram />
        </Nav.Link>
      </Nav>
      <Nav className="hero-text">
        <div>
          <h1>Angel Soto</h1>
          <h3>Full-stack web Developer/ Digital Designer</h3>
        </div>
      </Nav>
    </Container>
  );
}

export default Hero;
