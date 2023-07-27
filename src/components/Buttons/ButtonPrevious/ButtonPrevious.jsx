// import React from "react";
import "./ButtonPrevious.scss";
import PreviousIcon from "./../../../assets/icons/Previous.svg";
import { useContext } from "react";
import { MainContext } from "./../../../context/ContextProvider";

const ButtonPrevious = () => {
  const { handlePrevious } = useContext(MainContext);
  return (
    <button className="button-previous" onClick={handlePrevious}>
      <img src={PreviousIcon} alt="previous" />
      Geri
    </button>
  );
};

export default ButtonPrevious;
