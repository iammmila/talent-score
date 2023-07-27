// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./FormSide.scss";
import Sections from "../Sections/Sections";
import ProgressBar from "@ramonak/react-progress-bar";
import ButtonNext from "./../Buttons/ButtonNext/ButtonNext";
import ButtonPrevious from "./../Buttons/ButtonPrevious/ButtonPrevious";
import OlympicsQuestionPart3 from "./../OlympicsQuestionPart3/OlympicsQuestionPart3";
import { MainContext } from "./../../context/ContextProvider";
import GeneralQuestionPart1 from "./../GeneralQuestionPart1/GeneralQuestionPart1";
import EducationQuestionPart2 from "./../EducationQuestionPart2/EducationQuestionPart2";
import Lists from "./../Lists/Lists";
import ButtonPost from "../Buttons/ButtonPost/ButtonPost";

const FormSide = () => {
  const { currentStep, handleSubmit } = useContext(MainContext);
  const renderComponent = () => {
    if (currentStep === 1) {
      return <GeneralQuestionPart1 />;
    } else if (currentStep === 2) {
      return <EducationQuestionPart2 />;
    } else if (currentStep === 3) {
      return <OlympicsQuestionPart3 />;
    } else if (currentStep === 4) {
      return <Lists />;
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
  return (
    <div className="main-form">
      <Sections />
      <div className="form-side">
        <h6>Ümumi Suallar</h6>
        <ProgressBar
          barContainerClassName="bg"
          completed={progress()}
          bgColor="#038477"
          animateOnRender={true}
          isLabelVisible={false}
        />{" "}
        <form
          className="form-side__form"
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          {renderComponent()}
          <div className="buttons">
            <div className="buttons-container">
              {currentStep === 1 ? null : <ButtonPrevious />}
            </div>
            {currentStep < 4 && <ButtonNext />}
            {currentStep === 4 && <ButtonPost />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSide;
