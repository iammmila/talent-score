import React from "react";
import "./OlympicsQuestionPart4.scss";
import Select from "react-select";
import { subjects, levels, spots } from "../../data/options";
import { customStyles } from "./../../data/style-selection";

const OlympicsQuestionPart4 = () => {
  return (
    <>
      <div className="olympics-ques1">
        <span>Hansı fənn üzrə olimpiyada qalibi olmusunuz?</span>
        <Select styles={customStyles} options={subjects} />
      </div>
      <div className="olympics-ques2">
        <span>Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?</span>
        <Select styles={customStyles} options={levels} />
      </div>
      <div className="olympics-ques3">
        <span>Neçənci yer əldə etmisiniz?</span>
        <Select styles={customStyles} options={spots} />
      </div>
    </>
  );
};

export default OlympicsQuestionPart4;
