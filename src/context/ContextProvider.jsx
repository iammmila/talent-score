import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { createContext } from "react";
import { generalQuestion } from "../schema/generalQuestion";
import { useForm } from "react-hook-form";
import GeneralQuestionPart1 from "../components/GeneralQuestionPart1/GeneralQuestionPart1";
import EducationQuestionPart2 from "../components/EducationQuestionPart2/EducationQuestionPart2";
import OlympicsQuestionPart3 from "../components/OlympicsQuestionPart3/OlympicsQuestionPart3";
import Lists from "../components/Lists/Lists";
import SecondEducation from "../components/SecondEducation/SecondEducation";
import Bachelor from "../components/EducationDegree/Bachelor/Bachelor";
import Master from "../components/EducationDegree/Master/Master";
import Phd from "../components/EducationDegree/PHD/Phd";

export const MainContext = createContext(null);
function ContextProvider({ children }) {
  //! USESTATES
  const [currentStep, setCurrentStep] = useState(1);
  const [showSecondAdditional, setShowSecondAdditional] = useState(false);
  const [answerSelected, setAnswerSelected] = useState("");
  const [stateGeneral, setStateGeneral] = useState({
    name: "",
    surname: "",
    employment: "",
    education: "",
    degree: "",
  });
  const [stateBachelor, setStateBachelor] = useState({
    country: "",
    city: "",
    universityName: "",
    speciality: "",
    startDate: "",
    endDate: "",
    currentTuition: "",
    acceptingOption: "",
  });
  const [stateMaster, setStateMaster] = useState({
    country: "",
    city: "",
    universityName: "",
    speciality: "",
    startDate: "",
    endDate: "",
    currentTuition: "",
    acceptingOption: "",
  });
  const [statePhd, setStatePhd] = useState({
    country: "",
    city: "",
    universityName: "",
    speciality: "",
    startDate: "",
    endDate: "",
    currentTuition: "",
    acceptingOption: "",
  });
  // !Functions
  const handleOlympicsAnswerSelect = (event) => {
    setAnswerSelected(event.target.value);
  };
  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      if (
        ["Bakalavr", "Magistratura", "PhD"].includes(stateGeneral.education)
      ) {
        setShowSecondAdditional(false);
      } else {
        setCurrentStep(3);
      }
    } else if (currentStep === 2 && showSecondAdditional) {
      setCurrentStep(3);
      setShowSecondAdditional(false);
    } else if (currentStep === 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep === 3 && showSecondAdditional) {
      setShowSecondAdditional(false);
    } else if (currentStep === 3 && !showSecondAdditional) {
      if (
        ["Bakalavr", "Magistratura", "PhD"].includes(stateGeneral.education)
      ) {
        setCurrentStep(2);
      } else {
        setCurrentStep(1);
      }
    } else if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  const renderComponent = () => {
    if (currentStep === 1) {
      return <GeneralQuestionPart1 />;
    } else if (currentStep === 2) {
      return <EducationQuestionPart2 />;
    } else if (currentStep === 3) {
      return <>{showSecondAdditional ? <SecondEducation /> : <Lists />}</>;
    } else if (currentStep === 4) {
      return <OlympicsQuestionPart3 />;
    }
  };
  const renderEducation = () => {
    if (stateGeneral.education === "Bakalavr") {
      return <Bachelor />;
    } else if (stateGeneral.education === "Magistratura")
      return (
        <>
          <Bachelor />
          <br />
          <Master />
        </>
      );
    else if (stateGeneral.education === "PhD") {
      return (
        <>
          <Bachelor />
          <br />
          <Master />
          <br />
          <Phd />
        </>
      );
    } else {
      return <></>;
    }
  };
  const progress = () => {
    if (currentStep === 1) {
      return 25;
    } else if (currentStep === 2) {
      return 50;
    } else if (currentStep === 3) {
      return 75;
    } else if (currentStep === 4) {
      return 100;
    }
  };
  // !GENERAL
  const handleGeneralChange = (e) => {
    setStateGeneral({ ...stateGeneral, [e.target.name]: e.target.value });
  };
  const handleGeneralSelectChange = (name, selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.label : "";
    setStateGeneral({ ...stateGeneral, [name]: selectedValue });
  };
  //! BACHELOR
  const handleBachelorInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStateBachelor((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStateBachelor((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleBachelorSelectChange = (name, selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.label : "";
    setStateBachelor({ ...stateBachelor, [name]: selectedValue });
  };
  const handleBachelorAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStateBachelor((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  // !MASTER
  const handleMasterInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStateMaster((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStateMaster((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    // console.log(stateMaster);
  };
  const handleMasterSelectChange = (name, selectedOption) => {
    setStateMaster({ ...stateMaster, [name]: selectedOption.label });
  };
  const handleMasterAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStateMaster((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  // ! PHD
  const handlePHDInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStatePhd((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStatePhd((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(statePhd);
  };
  const handlePHDSelectChange = (name, selectedOption) => {
    setStatePhd({ ...statePhd, [name]: selectedOption.label });
  };
  const handlePHDAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStatePhd((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
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
    handleGeneralSelectChange,
    handleGeneralChange,
    handleBachelorSelectChange,
    handleBachelorAcceptingOptionChange,
    handleBachelorInputChange,
    handleMasterSelectChange,
    handleMasterInputChange,
    handleMasterAcceptingOptionChange,
    handlePHDInputChange,
    handlePHDSelectChange,
    handlePHDAcceptingOptionChange,
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
    stateGeneral,
    setStateGeneral,
    renderComponent,
    renderEducation,
    progress,
    stateBachelor,
    setStateBachelor,
    stateMaster,
    setStateMaster,
    statePhd,
    setStatePhd,
    answerSelected,
    setAnswerSelected,
    handleOlympicsAnswerSelect,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
