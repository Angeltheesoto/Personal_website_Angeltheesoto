import "./views.css";
import Contact from "../components/contact/Contact";
import Map from "../components/map/Map";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";

function Footer({ envData }) {
  return (
    <>
      <FadeInEffect>
        <Contact />
        <Map envData={envData} />
      </FadeInEffect>
    </>
  );
}

export default Footer;
