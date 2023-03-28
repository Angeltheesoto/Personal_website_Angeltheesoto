import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./seemore.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Seemore({ link, text, direction }: any) {
  return (
    <>
      {direction === "left" ? (
        <div className="seemore-container seemore-hover-effect-reverse">
          <Link to={link} className="seemore-link">
            <p className="seemore-text">
              <span className="seemore-arrow">
                <KeyboardDoubleArrowLeftIcon />
              </span>
              <span className="seemore-single-arrow">
                <MoreHorizIcon />
              </span>
              {text}{" "}
            </p>
          </Link>
        </div>
      ) : (
        <div className="seemore-container seemore-hover-effect ">
          <Link to={link} className="seemore-link">
            <p className="seemore-text">
              {text}{" "}
              <span className="seemore-arrow">
                <KeyboardDoubleArrowRightIcon />
              </span>
              <span className="seemore-single-arrow">
                <MoreHorizIcon />
              </span>
            </p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Seemore;
