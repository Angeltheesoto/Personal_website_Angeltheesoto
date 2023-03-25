import React from "react";
import Contact from "../components/contact/Contact";
import Map from "../components/map/Map";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";
import { type } from "os";

type Props = {
  envData?: string;
};

const currentYear: number = new Date().getFullYear();

export default function Footer(props: Props) {
  const { envData } = props;
  return (
    <>
      <FadeInEffect>
        <Contact />
        <Map envData={envData} />
        <hr className="copyright-hr" />
        <p className="copyright">
          &copy; {currentYear} Made with ❤ by Angel Soto.
        </p>
      </FadeInEffect>
    </>
  );
}
