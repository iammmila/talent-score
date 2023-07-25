import React from "react";
import "./OlympicsQuestionPart4.scss";
import Select from "react-select";
const OlympicsQuestionPart4 = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="olympics-ques1">
        <span>Hansı fənn üzrə olimpiyada qalibi olmusunuz?</span>
        <Select options={options} />
      </div>
      <div className="olympics-ques2">
        <span>Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?</span>
        <Select options={options} />
      </div>
      <div className="olympics-ques3">
        <span>Neçənci yer əldə etmisiniz?</span>
        <Select options={options} />
      </div>
    </>
  );
};

export default OlympicsQuestionPart4;
