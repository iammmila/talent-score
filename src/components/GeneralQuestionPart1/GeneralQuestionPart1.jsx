// import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";
import {
  firstSelection,
  secondSelection,
  thirdSelection,
} from "../../data/options";
import { customStyles } from "./../../data/style-selection";

const GeneralQuestionPart1 = () => {
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
