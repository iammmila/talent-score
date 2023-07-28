import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { createContext } from "react";
import { generalQuestion } from "../schema/generalQuestion";
import { useForm } from "react-hook-form";

export const MainContext = createContext(null);
function ContextProvider({ children }) {
  //! USESTATES
  const [currentStep, setCurrentStep] = useState(1);
  const [showSecondAdditional, setShowSecondAdditional] = useState(false);

  // !Functions
  const handleNext = () => {
    if (currentStep === 3 && showSecondAdditional) {
      setCurrentStep(3);
      setShowSecondAdditional(false); // Hide <SecondAdditional /> component
    } else if (currentStep === 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep === 3 && showSecondAdditional) {
      // If in step 3 and the <SecondAdditional /> component is shown, hide it
      setShowSecondAdditional(false);
    } else if (currentStep > 1) {
      // For other steps, go to the previous step
      setCurrentStep((prevStep) => prevStep - 1);
    }
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
    showSecondAdditional,
    setShowSecondAdditional,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
