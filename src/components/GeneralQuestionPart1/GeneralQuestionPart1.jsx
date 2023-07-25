import React from "react";
import "./GeneralQuestionPart1.scss";

const GeneralQuestionPart1 = () => {
  return (
    <form className="general-questions">
      <div>
        <div>
          <label htmlFor="name">Ad*</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="surname">Soyad*</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <span>Hazırda məşğuliyyətiniz?*</span>
        <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div>
        <span>Təhsiliniz?*</span>
        <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div>
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        <select name="education" id="education">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
    </form>
  );
};

export default GeneralQuestionPart1;
