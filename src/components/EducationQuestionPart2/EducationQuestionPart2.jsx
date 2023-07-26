// eslint-disable-next-line no-unused-vars
import React from "react";
import "./EducationQuestionPart3.scss";
import Select from "react-select";

const EducationQuestionPart2 = () => {
  return (
    <form className="education-questions-section">
      <div className="bachelor">
        <span>
          <span style={{ color: "#038477" }}>Bakalavr</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <Select placeholder="Ölkə" className="country" />
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
    </form>
  );
};

export default EducationQuestionPart2;
