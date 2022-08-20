import React from "react";
import icons from "../../assets/icons.svg";

import "./spinner.css"

export default function Spinner() {
  return (
    <div class="spinner">
      <svg>
        <use href={`${icons}#icon-loader`}></use>
      </svg>
    </div>
  );
}
