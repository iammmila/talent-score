import React from "react";
import "./OlympicsQuestionPart3.scss";
import OlympicsQuestionPart4 from "../OlympicsQuestionPart4/OlympicsQuestionPart4";

const OlympicsQuestionPart3 = () => {
  return (
    <form className="olympics-question-part3">
      <div className="winner">
        <span>Olimpiyada qalibi olmusunuzmu?*</span>
        <div className="question">
          <div>
            <label htmlFor="yes">Bəli</label>
            <input type="radio" id="yes" name="experience" />
          </div>
          <div>
            <label htmlFor="no">Xeyr</label>
            <input type="radio" name="experience" id="no" />
          </div>
        </div>
      </div>
      <OlympicsQuestionPart4 />
    </form>
  );
};

export default OlympicsQuestionPart3;
