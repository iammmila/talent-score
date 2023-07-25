// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FormSide.scss";
import Sections from "../Sections/Sections";
import GeneralQuestionPart1 from "./../GeneralQuestionPart1/GeneralQuestionPart1";
import ProgressBar from "@ramonak/react-progress-bar";
import ButtonNext from "./../Buttons/ButtonNext/ButtonNext";
import ButtonPrevious from "./../Buttons/ButtonPrevious/ButtonPrevious";

const FormSide = () => {
  return (
    <div className="main-form">
      <Sections />
      <div className="form-side">
        <h6>Ümumi Suallar</h6>
        <ProgressBar
          barContainerClassName="bg"
          completed={50}
          bgColor="#038477"
          animateOnRender={true}
          isLabelVisible={false}
        />
        <GeneralQuestionPart1 />
      </div>
      <div className="buttons">
        <ButtonPrevious />
        <ButtonNext />
      </div>
    </div>
  );
};

export default FormSide;
