import React, { useContext } from "react";
import "./ButtonNext.scss";
import { MainContext } from "./../../../context/ContextProvider";

const ButtonNext = () => {
  const { handleNext, currentStep, trigger } = useContext(MainContext);
  const isNextButtonDisabled = currentStep === 4;

  const handleClick = async (event) => {
    event.preventDefault();
    // const isValid = await trigger();
    // if (isValid) {
    handleNext();
    // }
  };
  return (
    <button
      className="button-next"
      disabled={isNextButtonDisabled}
      type="submit"
      onClick={handleClick}
    >
      Növbəti
    </button>
  );
};

export default ButtonNext;
