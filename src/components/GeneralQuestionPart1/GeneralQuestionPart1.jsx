// import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";
import {
  firstSelection,
  secondSelection,
  thirdSelection,
} from "../../data/options";

const GeneralQuestionPart1 = () => {
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
    <form className="general-questions">
      <div className="fullname">
        <div className="name">
          <label htmlFor="name">Ad*</label>
          <input type="text" />
        </div>
        <div className="surname">
          <label htmlFor="surname">Soyad*</label>
          <input type="text" />
        </div>
      </div>
      <div className="employment">
        <span>Hazırda məşğuliyyətiniz?*</span>
        <Select options={firstSelection} styles={customStyles} />
      </div>
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select options={secondSelection} styles={customStyles} />
      </div>
      <div className="degree">
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        <Select options={thirdSelection} styles={customStyles} />
      </div>
    </form>
  );
};

export default GeneralQuestionPart1;
