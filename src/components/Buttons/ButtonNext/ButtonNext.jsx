import React, { useContext } from "react";
import "./ButtonNext.scss";
import { MainContext } from "./../../../context/ContextProvider";
import { useForm } from "react-hook-form";

const ButtonNext = () => {
  const { trigger } = useForm();
  const { handleNext, currentStep } = useContext(MainContext);
  const isNextButtonDisabled = currentStep === 4;

  return (
    <button
      className="button-next"
      disabled={isNextButtonDisabled}
      onClick={async () => {
        const isValid = await trigger();
        if (isValid) {
          handleNext();
        }
      }}
    >
      Növbəti
    </button>
  );
};

export default ButtonNext;
