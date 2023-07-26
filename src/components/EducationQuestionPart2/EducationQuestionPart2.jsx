// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./EducationQuestionPart2.scss";
import Select from "react-select";
import { countries, cities } from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import LocalExam from "./LocalExam/LocalExam";
import Appealing from "./Appealing/Appealing";
// import BothOfThem from "./BothOfThem/BothOfThem";

const EducationQuestionPart2 = () => {
  const [acceptingOption, setAcceptingOption] = useState("");
  const handleAcceptingOptionChange = (event) => {
    setAcceptingOption(event.target.value);
  };
  return (
    <form className="education-questions-section">
      <div className="bachelor">
        <span>
          <span style={{ color: "#038477" }}>Bakalavr</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            styles={customStyles}
            options={countries}
            placeholder="Ölkə"
            className="country"
          />
          <Select
            styles={customStyles}
            options={cities}
            placeholder="Şəhər"
            className="city"
          />
        </div>
      </div>
      <div className="university-name">
        <span>Universitetin adı</span>
        <input type="text" placeholder="Universitetin adı" />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input type="text" placeholder="İxtisas adı" />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input type="date" />
          <input type="date" />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input type="checkbox" id="current" />
        </div>
      </div>
      <div className="type-accepting">
        <span>Hansı meyyarlarla qəbul olmusunuz</span>
        <div className="radios">
          <div>
            <label htmlFor="local">Lokal imtahan</label>
            <input
              type="radio"
              id="local"
              name="accepting"
              value="local"
              checked={acceptingOption === "local"}
              onChange={handleAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input
              type="radio"
              id="appeal"
              name="accepting"
              value="appeal"
              checked={acceptingOption === "appeal"}
              onChange={handleAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input
              type="radio"
              id="both"
              name="accepting"
              value="both"
              checked={acceptingOption === "both"}
              onChange={handleAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {acceptingOption === "local" && <LocalExam />}
      {acceptingOption === "appeal" && <Appealing />}
      {acceptingOption === "both" && (
        <>
          <LocalExam />
          <Appealing />
        </>
      )}
    </form>
  );
};

export default EducationQuestionPart2;
