import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";
import {
  firstSelection,
  secondSelection,
  thirdSelection,
} from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generalQuestion } from "./../../schema/generalQuestion";
import { useState } from "react";

const GeneralQuestionPart1 = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    employment: null,
    education: null,
    degree: null,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (name, selectedOption) => {
    setState({ ...state, [name]: selectedOption });
  };

  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(generalQuestion) });

  return (
    <div className="general-questions">
      <div className="fullname">
        <div className="name">
          <label htmlFor="name">Ad*</label>
          <input
            {...register("name")}
            value={state.name}
            type="text"
            id="name"
            onChange={handleChange}
          />
          {errors.name ? (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          ) : (
            <></>
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
          {errors.surname ? (
            <span style={{ color: "red" }}>{errors.surname.message}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="employment">
        <span>Hazırda məşğuliyyətiniz?*</span>
        <Select
          {...register("employment")}
          options={firstSelection}
          styles={customStyles}
          value={state.employment}
          onChange={(selectedOption) =>
            handleSelectChange("employment", selectedOption)
          }
        />
        {errors.employment ? (
          <span style={{ color: "red" }}>{errors.employment.message}</span>
        ) : (
          <></>
        )}
      </div>
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select
          {...register("education")}
          options={secondSelection}
          styles={customStyles}
          value={state.education}
          onChange={(selectedOption) =>
            handleSelectChange("education", selectedOption)
          }
        />
        {errors.education ? (
          <span style={{ color: "red" }}>{errors.education.message}</span>
        ) : (
          <></>
        )}
      </div>
      <div className="degree">
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        <Select
          {...register("degree")}
          options={thirdSelection}
          styles={customStyles}
          value={state.degree}
          onChange={(selectedOption) =>
            handleSelectChange("degree", selectedOption)
          }
        />
        {errors.degree ? (
          <span style={{ color: "red" }}>{errors.degree.message}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default GeneralQuestionPart1;
