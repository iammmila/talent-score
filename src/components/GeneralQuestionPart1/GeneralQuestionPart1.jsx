// import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";
import {
  firstSelection,
  secondSelection,
  thirdSelection,
} from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { MainContext } from "../../context/ContextProvider";

const GeneralQuestionPart1 = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    employment: "",
    education: "",
    degree: "",
  });
  const { errors, register, clearErrors } = useContext(MainContext);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const handleSelectChange = (name, selectedOption) => {
    setState({ ...state, [name]: selectedOption.value });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="general-questions">
      <div className="fullname">
        <div className="name">
          <label htmlFor="name">Ad*</label>
          <input
            {...register("name", { required: true })}
            value={state.name}
            type="text"
            id="name"
            onChange={handleChange}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>
        <div className="surname">
          <label htmlFor="surname">Soyad*</label>
          <input
            {...register("surname")}
            value={state.surname}
            type="text"
            id="surname"
            onChange={handleChange}
          />
          {errors.surname && (
            <span style={{ color: "red" }}>{errors.surname.message}</span>
          )}
        </div>
      </div>
      <div className="employment">
        <span>Hazırda məşğuliyyətiniz?*</span>
        <Select
          {...register("employment")}
          options={firstSelection}
          styles={customStyles}
          defaultValue={state.employment}
          value={state.employment}
          onChange={(selectedOption) =>
            handleSelectChange("employment", selectedOption)
          }
        />
        {errors.employment && (
          <span style={{ color: "red" }}>{errors.employment.message}</span>
        )}
      </div>
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select
          {...register("education")}
          options={secondSelection}
          styles={customStyles}
          defaultValue={state.education}
          value={state.education}
          onChange={(selectedOption) =>
            handleSelectChange("education", selectedOption)
          }
        />
        {errors.education && (
          <span style={{ color: "red" }}>{errors.education.message}</span>
        )}
      </div>
      <div className="degree">
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        <Select
          {...register("degree")}
          value={state.degree}
          options={thirdSelection}
          styles={customStyles}
          defaultValue={state.degree}
          onChange={(selectedOption) =>
            handleSelectChange("degree", selectedOption)
          }
        />
        {errors.degree && (
          <span style={{ color: "red" }}>{errors.degree.message}</span>
        )}
      </div>
    </div>
  );
};

export default GeneralQuestionPart1;
