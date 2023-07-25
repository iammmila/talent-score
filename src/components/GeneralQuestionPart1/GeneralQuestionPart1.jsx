import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";

const GeneralQuestionPart1 = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
        {/* <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select> */}
        <Select options={options} />
      </div>
      <div className="education">
        <span>Təhsiliniz?*</span>
        {/* <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select> */}
        <Select options={options} />
      </div>
      <div className="degree">
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        {/* <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select> */}
        <Select options={options} />
      </div>
    </form>
  );
};

export default GeneralQuestionPart1;
