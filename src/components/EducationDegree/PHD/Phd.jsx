import React from "react";
import "./Phd.scss";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import { cities, countries } from "../../../data/options";
import { customStyles } from "../../../data/style-selection";
import Select from "react-select";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";
import { useEffect } from "react";

const Phd = () => {
  const {
    register,
    statePhd,
    handlePHDInputChange,
    handlePHDSelectChange,
    handlePHDAcceptingOptionChange,
  } = useContext(MainContext);

  useEffect(() => {
    console.log(statePhd);
  }, [statePhd]);

  return (
    <div className="phd-education-questions-section">
      <div className="phd">
        <span>
          <span style={{ color: "#038477" }}>PhD</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            {...register("country")}
            styles={customStyles}
            options={countries}
            value={
              statePhd.city
                ? {
                    label: statePhd.city,
                    value: statePhd.city,
                  }
                : null
            }
            placeholder="Ölkə"
            className="country"
            name="country"
            onChange={(selectedOption) =>
              handlePHDSelectChange("country", selectedOption)
            }
          />
          {statePhd.country && (
            <Select
              styles={customStyles}
              options={cities}
              value={
                statePhd.city
                  ? {
                      label: statePhd.city,
                      value: statePhd.city,
                    }
                  : null
              }
              placeholder="Şəhər"
              className="city"
              name="city"
              onChange={(selectedOption) =>
                handlePHDSelectChange("city", selectedOption)
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
          value={statePhd.universityName}
          onChange={handlePHDInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={statePhd.speciality}
          onChange={handlePHDInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            {...register("startDate")}
            type="date"
            name="startDate"
            value={statePhd.startDate}
            onChange={handlePHDInputChange}
          />
          <input
            {...register("endDate")}
            type="date"
            name="endDate"
            value={statePhd.currentTuition ? "current" : statePhd.endDate}
            onChange={handlePHDInputChange}
            disabled={statePhd.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={statePhd.currentTuition}
            onChange={handlePHDInputChange}
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
              checked={statePhd.acceptingOption === "local"}
              onChange={handlePHDAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input
              type="radio"
              id="appeal"
              name="accepting"
              value="appeal"
              checked={statePhd.acceptingOption === "appeal"}
              onChange={handlePHDAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input
              type="radio"
              id="both"
              name="accepting"
              value="both"
              checked={statePhd.acceptingOption === "both"}
              onChange={handlePHDAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {statePhd.acceptingOption === "local" && <LocalExam />}
      {statePhd.acceptingOption === "appeal" && <Appealing />}
      {statePhd.acceptingOption === "both" && (
        <>
          <LocalExam />
          <Appealing />
        </>
      )}
    </div>
  );
};

export default Phd;
