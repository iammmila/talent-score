// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./FormSide.scss";
import Sections from "../Sections/Sections";
import ProgressBar from "@ramonak/react-progress-bar";
import ButtonNext from "./../Buttons/ButtonNext/ButtonNext";
import ButtonPrevious from "./../Buttons/ButtonPrevious/ButtonPrevious";
import { MainContext } from "./../../context/ContextProvider";
import ButtonPost from "../Buttons/ButtonPost/ButtonPost";

const FormSide = () => {
  const { currentStep, progress, handleSubmit, renderComponent } =
    useContext(MainContext);

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
          // onSubmit={handleSubmit((d) => console.log(d))}
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
