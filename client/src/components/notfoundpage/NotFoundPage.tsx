import React from "react";
import { Link } from "react-router-dom";
import "./notfoundpage.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import FadeInEffect from "../fadeineffect/FadeInEffect";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="notfoundpage-container">
        <FadeInEffect>
          <div>
            <h3 className="notfoundpage-heading">404</h3>
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: 100, color: "white" }}
            />
            <p className="notfoundpage-text">Page not found</p>
            <Link to="/" className="link-hover-effect">
              <span className="notfoundpage-span">Go to Home</span>
            </Link>
          </div>
        </FadeInEffect>
      </div>
    </>
  );
};

export default NotFoundPage;
