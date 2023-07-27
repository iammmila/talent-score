import React, { useState } from "react";
import { createContext } from "react";

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

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };
  //?VALUES
  const values = {
    currentStep,
    setCurrentStep,
    handleNext,
    handlePrevious,
    onSubmit,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
