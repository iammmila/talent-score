// eslint-disable-next-line no-unused-vars
import React from "react";
import "./EducationQuestionPart2.scss";
import Select from "react-select";
import { countries, cities } from "../../data/options";
import LocalExam from "./LocalExam/LocalExam";
import Appealing from "./Appealing/Appealing";
import Atestat from "./Appealing/Atestat/Atestat";
import LanguageTest from "./Appealing/LanguageTest/LanguageTest";
import Sat from "./Appealing/SAT/Sat";
import Additional from "./Appealing/Additional/Additional";
import BothOfThem from "./BothOfThem/BothOfThem";

const EducationQuestionPart2 = () => {
  const customStyles = {
    // Style for the selected option
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
      color: state.isSelected ? "white" : "#038477",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
      color: state.isSelected ? "white" : "#038477",
    }),
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
        <input type="text" />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input type="text" />
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
            <input type="radio" id="local" name="accepting" />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input type="radio" id="appeal" name="accepting" />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input type="radio" id="both" name="accepting" />
          </div>
        </div>
      </div>
      <LocalExam />
      <Appealing />
      <Additional />
      <Atestat />
      <LanguageTest />
      <Sat />
      <BothOfThem />
    </form>
  );
};

export default EducationQuestionPart2;
