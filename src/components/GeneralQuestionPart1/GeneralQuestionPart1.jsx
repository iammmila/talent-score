// import React from "react";
import "./GeneralQuestionPart1.scss";
import Select from "react-select";
import {
  firstSelection,
  secondSelection,
  thirdSelection,
} from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import { useContext } from "react";
import { MainContext } from "../../context/ContextProvider";
import { useEffect } from "react";

const GeneralQuestionPart1 = () => {
  const {
    errors,
    register,
    stateGeneral,
    handleGeneralChange,
    handleSelectGeneralChange,
  } = useContext(MainContext);
  useEffect(() => {
    console.log(stateGeneral);
  }, [stateGeneral]);

  return (
    <div className="general-questions">
      <div className="fullname">
        <div className="name">
          <label htmlFor="name">Ad*</label>
          <input
            {...register("name")}
            value={stateGeneral.name}
            type="text"
            id="name"
            onChange={handleGeneralChange}
          />
          {/* {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )} */}
        </div>
        <div className="surname">
          <label htmlFor="surname">Soyad*</label>
          <input
            {...register("surname")}
            value={stateGeneral.surname}
            type="text"
            id="surname"
            onChange={handleGeneralChange}
          />
          {/* {errors.surname && (
            <span style={{ color: "red" }}>{errors.surname.message}</span>
          )} */}
        </div>
      </div>
      <div className="employment">
        <span>Hazırda məşğuliyyətiniz?*</span>
        <Select
          {...register("employment")}
          options={firstSelection}
          styles={customStyles}
          value={
            stateGeneral.employment
              ? {
                  label: stateGeneral.employment,
                  value: stateGeneral.employment,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleSelectGeneralChange("employment", selectedOption)
          }
        />
        {/* {errors.employment && (
          <span style={{ color: "red" }}>{errors.employment.message}</span>
        )} */}
      </div>
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select
          {...register("education")}
          options={secondSelection}
          styles={customStyles}
          value={
            stateGeneral.education
              ? {
                  label: stateGeneral.education,
                  value: stateGeneral.education,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleSelectGeneralChange("education", selectedOption)
          }
        />
        {/* {errors.education && (
          <span style={{ color: "red" }}>{errors.education.message}</span>
        )} */}
      </div>
      <div className="degree">
        <span>Aşağıdakılardan hansı sizə uyğundur?*</span>
        <Select
          {...register("degree")}
          // value={stateGeneral.degree}
          options={thirdSelection}
          styles={customStyles}
          value={
            stateGeneral.degree
              ? {
                  label: stateGeneral.degree,
                  value: stateGeneral.degree,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleSelectGeneralChange("degree", selectedOption)
          }
        />
        {/* {errors.degree && (
          <span style={{ color: "red" }}>{errors.degree.message}</span>
        )} */}
      </div>
    </div>
  );
};

export default GeneralQuestionPart1;
