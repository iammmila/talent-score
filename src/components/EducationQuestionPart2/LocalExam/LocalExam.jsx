import React, { useState } from "react";
import "./LocalExam.scss";

const LocalExam = () => {
  const [score, setScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const handleScoreChange = (event) => {
    const inputScore = event.target.value;
    // If the input is empty or it's a valid number within the valid range, update the state
    if (
      inputScore === "" ||
      (inputScore >= 0 && inputScore <= parseInt(maxScore, 10))
    ) {
      setScore(inputScore);
    }
  };

  const handleMaxScoreChange = (event) => {
    const inputMaxScore = event.target.value;
    // If the input is empty or it's a valid number and greater than or equal to the current score, update the state
    if (
      inputMaxScore === "" ||
      (inputMaxScore >= 0 && (!score || inputMaxScore >= parseInt(score, 10)))
    ) {
      setMaxScore(inputMaxScore);
    }
  };

  return (
    <div className="local-exam">
      <span>
        Lokal imtahanın adını, topladığınız bal və maksimal balı qeyd edin.
      </span>
      <div>
        <input className="test-name" type="text" placeholder="Testin adı" />
        <input
          className="score"
          type="number"
          placeholder="Balınız"
          value={score}
          onChange={handleScoreChange}
        />
        <input
          className="max-score"
          type="number"
          placeholder="Maksimal bal"
          value={maxScore}
          onChange={handleMaxScoreChange}
        />
      </div>
    </div>
  );
};

export default LocalExam;
