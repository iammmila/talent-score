import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { createContext } from "react";
import { generalQuestion } from "../schema/generalQuestion";
import { useForm } from "react-hook-form";

export const MainContext = createContext(null);
function ContextProvider({ children }) {
  //! USESTATES
  const [currentStep, setCurrentStep] = useState(1);

  // !Functions
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const {
    register,
    handleSubmit,
    trigger,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: yupResolver(generalQuestion) });

  //?VALUES
  const values = {
    currentStep,
    setCurrentStep,
    handleNext,
    handlePrevious,
    register,
    handleSubmit,
    errors,
    trigger,
    clearErrors,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
