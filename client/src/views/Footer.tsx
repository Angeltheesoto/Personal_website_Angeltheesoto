import React from "react";
import "./views.css";
import Contact from "../components/contact/Contact";
import Map from "../components/map/Map";
import FadeInEffect from "../components/fadeineffect/FadeInEffect";
import { type } from "os";

type Props = {
  envData?: string;
};

export default function Footer(props: Props) {
  const { envData } = props;
  return (
    <>
      <FadeInEffect>
        <Contact />
        <Map envData={envData} />
      </FadeInEffect>
    </>
  );
}
