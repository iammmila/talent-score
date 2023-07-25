// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FormSide.scss";
import Sections from "../Sections/Sections";
import GeneralQuestionPart1 from "./../GeneralQuestionPart1/GeneralQuestionPart1";
import ProgressBar from "./../ProgressBar/ProgressBar";

const FormSide = () => {
  return (
    <div className="main-form">
      <Sections />
      <div className="form-side">
        <h6>Ümumi Suallar</h6>
        <ProgressBar />
        <GeneralQuestionPart1 />
      </div>
      <button>Növbəti</button>
    </div>
  );
};

export default FormSide;
