// import React from "react";
import "./ButtonPrevious.scss";
import PreviousIcon from "./../../../assets/icons/Previous.svg";

const ButtonPrevious = () => {
  return (
    <button className="button-previous">
      <img src={PreviousIcon} alt="previous" />
      {/* <PreviousIcon /> */}
      Geri
    </button>
  );
};

export default ButtonPrevious;
