import React, { useContext, useState } from "react";
import "./SecondEducation.scss";
import { customStyles } from "../../data/style-selection";
import { cities, countries, secondSelection } from "../../data/options";
import Select from "react-select";
import LocalExam from "../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../EducationQuestionPart2/Appealing/Appealing";
import { MainContext } from "../../context/ContextProvider";
import { useEffect } from "react";

const SecondEducation = () => {
  const {
    register,
    stateNew,
    handleNewInputChange,
    handleNewSelectChange,
    handleNewAcceptingOptionChange,
  } = useContext(MainContext);

  useEffect(() => {
    console.log(stateNew);
  }, [stateNew]);
  
  return (
    <div className="second-education-questions-section">
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select
          {...register("degree")}
          options={secondSelection}
          styles={customStyles}
          value={
            stateNew.degree
              ? {
                  label: stateNew.degree,
                  value: stateNew.degree,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleNewSelectChange("degree", selectedOption)
          }
        />
        {/* {errors.education && (
          <span style={{ color: "red" }}>{errors.education.message}</span>
        )} */}
      </div>
      <div className="edu-degree">
        <span>
          <span style={{ color: "#038477" }}>
            {stateNew.degree ? stateNew.degree : "Təhsil"}
          </span>{" "}
          pilləsi barədə məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            {...register("country")}
            styles={customStyles}
            options={countries}
            placeholder="Ölkə"
            className="country"
            name="country"
            value={
              stateNew.country
                ? {
                    label: stateNew.country,
                    value: stateNew.country,
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleNewSelectChange("country", selectedOption)
            }
          />
          {stateNew.country && (
            <Select
              {...register("city")}
              styles={customStyles}
              options={cities}
              placeholder="Şəhər"
              className="city"
              name="city"
              value={
                stateNew.city
                  ? {
                      label: stateNew.city,
                      value: stateNew.city,
                    }
                  : null
              }
              onChange={(selectedOption) =>
                handleNewSelectChange("city", selectedOption)
              }
            />
          )}
        </div>
      </div>
      <div className="university-name">
        <span>Universitetin adı</span>
        <input
          type="text"
          placeholder="Universitetin adı"
          name="universityName"
          value={stateNew.universityName}
          onChange={handleNewInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={stateNew.speciality}
          onChange={handleNewInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            type="date"
            name="startDate"
            value={stateNew.startDate}
            onChange={handleNewInputChange}
          />
          <input
            type="date"
            name="endDate"
            value={stateNew.currentTuition ? "current" : stateNew.endDate}
            onChange={handleNewInputChange}
            disabled={stateNew.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={stateNew.currentTuition}
            onChange={handleNewInputChange}
          />
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
              checked={stateNew.acceptingOption === "local"}
              onChange={handleNewAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input
              type="radio"
              id="appeal"
              name="accepting"
              value="appeal"
              checked={stateNew.acceptingOption === "appeal"}
              onChange={handleNewAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input
              type="radio"
              id="both"
              name="accepting"
              value="both"
              checked={stateNew.acceptingOption === "both"}
              onChange={handleNewAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {stateNew.acceptingOption === "local" && <LocalExam />}
      {stateNew.acceptingOption === "appeal" && <Appealing />}
      {stateNew.acceptingOption === "both" && (
        <>
          <LocalExam />
          <Appealing />
        </>
      )}
    </div>
  );
};

export default SecondEducation;
