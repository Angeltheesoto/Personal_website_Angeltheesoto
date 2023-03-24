import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./seemore.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Seemore({ link }: any) {
  return (
    <div className="seemore-container seemore-hover-effect ">
      <Link to={link} className="seemore-link">
        <p className="seemore-text">
          See More{" "}
          <span className="seemore-arrow">
            <KeyboardDoubleArrowRightIcon />
          </span>
          <span className="seemore-single-arrow">
            <MoreHorizIcon />
          </span>
        </p>
      </Link>
    </div>
  );
}

export default Seemore;
