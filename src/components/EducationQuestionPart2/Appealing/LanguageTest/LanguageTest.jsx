import React from "react";
import "./LanguageTest.scss";
import { useState } from "react";

const LanguageTest = () => {
  const [languages, setLanguages] = useState({
    ielts: "",
    toefl: "",
  });
  const handleIeltsChange = (event) => {
    let inputValue = event.target.value;
    if (
      inputValue === "" ||
      (inputValue >= 0 && inputValue <= parseFloat(9, 10))
    ) {
      setLanguages((prevLanguages) => ({
        ...prevLanguages,
        ielts: inputValue,
      }));
    }
  };
  const handleToeflChange = (event) => {
    let inputValue = event.target.value;
    if (
      inputValue === "" ||
      (inputValue >= 0 && inputValue <= parseInt(1200, 10))
    ) {
      setLanguages((prevLanguages) => ({
        ...prevLanguages,
        toefl: inputValue,
      }));
    }
  };
  return (
    <div className="language-test">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>
          Language test (IELTS, TOEFL)
        </span>
        üzrə nəticəni qeyd edin.
      </span>
      <input
        type="text"
        placeholder="IELTS Nəticə"
        value={languages.ielts}
        onChange={handleIeltsChange}
      />
      <input
        type="number"
        placeholder="TOEFL Nəticə"
        value={languages.toefl}
        onChange={handleToeflChange}
      />
    </div>
  );
};

export default LanguageTest;
