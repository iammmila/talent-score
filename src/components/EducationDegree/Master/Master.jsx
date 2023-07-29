import React, { useEffect } from "react";
import "./Master.scss";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";
import Select from "react-select";
import { customStyles } from "../../../data/style-selection";
import { cities, countries } from "../../../data/options";

const Master = () => {
  const {
    register,
    stateMaster,
    handleMasterSelectChange,
    handleMasterInputChange,
    handleMasterAcceptingOptionChange,
  } = useContext(MainContext);

  useEffect(() => {
    console.log(stateMaster);
  }, [stateMaster]);
  return (
    <div className="master-education-questions-section">
      <div className="master">
        <span>
          <span style={{ color: "#038477" }}>Magistratura</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            {...register("country")}
            styles={customStyles}
            options={countries}
            value={
              stateMaster.country
                ? {
                    label: stateMaster.country,
                    value: stateMaster.country,
                  }
                : null
            }
            placeholder="Ölkə..."
            className="country"
            name="country"
            onChange={(selectedOption) =>
              handleMasterSelectChange("country", selectedOption)
            }
          />
          {stateMaster.country && (
            <Select
              {...register("city")}
              styles={customStyles}
              options={cities}
              value={
                stateMaster.city
                  ? {
                      label: stateMaster.city,
                      value: stateMaster.city,
                    }
                  : null
              }
              placeholder="Şəhər"
              className="city"
              name="city"
              onChange={(selectedOption) =>
                handleMasterSelectChange("city", selectedOption)
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
          value={stateMaster.universityName}
          onChange={handleMasterInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={stateMaster.speciality}
          onChange={handleMasterInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            {...register("startDate")}
            type="date"
            name="startDate"
            value={stateMaster.startDate}
            onChange={handleMasterInputChange}
          />
          <input
            {...register("endDate")}
            type="date"
            name="endDate"
            value={stateMaster.currentTuition ? "current" : stateMaster.endDate}
            onChange={handleMasterInputChange}
            disabled={stateMaster.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={stateMaster.currentTuition}
            onChange={handleMasterInputChange}
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
              checked={stateMaster.acceptingOption === "local"}
              onChange={handleMasterAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input
              type="radio"
              id="appeal"
              name="accepting"
              value="appeal"
              checked={stateMaster.acceptingOption === "appeal"}
              onChange={handleMasterAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input
              type="radio"
              id="both"
              name="accepting"
              value="both"
              checked={stateMaster.acceptingOption === "both"}
              onChange={handleMasterAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {stateMaster.acceptingOption === "local" && <LocalExam />}
      {stateMaster.acceptingOption === "appeal" && <Appealing />}
      {stateMaster.acceptingOption === "both" && (
        <div>
          <LocalExam />
          <Appealing />
        </div>
      )}
    </div>
  );
};

export default Master;
