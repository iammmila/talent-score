import React from "react";
import "./LanguageTest.scss";

const LanguageTest = () => {
  return (
    <div className="language-test">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>
          Language test (IELTS, TOEFL)
        </span>
        üzrə nəticəni qeyd edin.
      </span>
      <input type="text" placeholder="IELTS Nəticə" />
      <input type="text" placeholder="TOEFL Nəticə" />
    </div>
  );
};

export default LanguageTest;
