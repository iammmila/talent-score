import React, { useState } from "react";
import "./OlympicsQuestionPart3.scss";
import OlympicsQuestionPart4 from "../OlympicsQuestionPart4/OlympicsQuestionPart4";

const OlympicsQuestionPart3 = () => {
  const [answerSelected, setAnswerSelected] = useState("");
  const handleAnswerSelect = (event) => {
    setAnswerSelected(event.target.value);
  };
  
  return (
    <div className="olympics-question-part3">
      <div className="winner">
        <span>Olimpiyada qalibi olmusunuzmu?*</span>
        <div className="question">
          <div>
            <label htmlFor="yes">Bəli</label>
            <input
              type="radio"
              id="yes"
              value={"yes"}
              name="experience"
              onChange={handleAnswerSelect}
            />
          </div>
          <div>
            <label htmlFor="no">Xeyr</label>
            <input
              type="radio"
              name="experience"
              id="no"
              value={"no"}
              onChange={handleAnswerSelect}
            />
          </div>
        </div>
      </div>
      {answerSelected === "yes" ? <OlympicsQuestionPart4 /> : ""}
    </div>
  );
};

export default OlympicsQuestionPart3;
