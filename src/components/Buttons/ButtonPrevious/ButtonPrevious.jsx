// import React from "react";
import "./ButtonPrevious.scss";
import PreviousIcon from "./../../../assets/icons/Previous.svg";
import { useContext } from "react";
import { MainContext } from "./../../../context/ContextProvider";

const ButtonPrevious = () => {
  const { handlePrevious } = useContext(MainContext);
  const handleClick = (event) => {
    event.preventDefault();
    handlePrevious();
  };
  return (
    <button className="button-previous" onClick={handleClick}>
      <img src={PreviousIcon} alt="previous" />
      Geri
    </button>
  );
};

export default ButtonPrevious;
