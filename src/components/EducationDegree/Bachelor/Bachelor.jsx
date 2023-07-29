import React, { useEffect } from "react";
import "./Bachelor.scss";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";
import Select from "react-select";
import { customStyles } from "../../../data/style-selection";
import { cities, countries } from "../../../data/options";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";

const Bachelor = () => {
  const {
    register,
    stateBachelor,
    handleBachelorSelectChange,
    handleBachelorAcceptingOptionChange,
    handleBachelorInputChange,
  } = useContext(MainContext);

  useEffect(() => {
    console.log(stateBachelor);
  }, [stateBachelor]);
  return (
    <div className="bachelor-education-questions-section">
      <div className="bachelor">
        <span>
          <span style={{ color: "#038477" }}>Bakalavr</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            {...register("country")}
            styles={customStyles}
            options={countries}
            value={
              stateBachelor.country
                ? {
                    label: stateBachelor.country,
                    value: stateBachelor.country,
                  }
                : null
            }
            placeholder="Ölkə..."
            className="country"
            name="country"
            onChange={(selectedOption) =>
              handleBachelorSelectChange("country", selectedOption)
            }
          />
          {stateBachelor.country && (
            <Select
              {...register("city")}
              styles={customStyles}
              options={cities}
              value={
                stateBachelor.city
                  ? {
                      label: stateBachelor.city,
                      value: stateBachelor.city,
                    }
                  : null
              }
              placeholder="Şəhər..."
              className="city"
              name="city"
              onChange={(selectedOption) =>
                handleBachelorSelectChange("city", selectedOption)
              }
            />
          )}
        </div>
      </div>
      <div className="university-name">
        <span>Universitetin adı</span>
        <input
          {...register("universityName")}
          type="text"
          placeholder="Universitetin adı"
          name="universityName"
          value={stateBachelor.universityName}
          onChange={handleBachelorInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          {...register("speciality")}
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={stateBachelor.speciality}
          onChange={handleBachelorInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            {...register("startDate")}
            type="date"
            name="startDate"
            value={stateBachelor.startDate}
            onChange={handleBachelorInputChange}
          />
          <input
            {...register("endDate")}
            type="date"
            name="endDate"
            value={
              stateBachelor.currentTuition ? "current" : stateBachelor.endDate
            }
            onChange={handleBachelorInputChange}
            disabled={stateBachelor.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            {...register("currentTuition")}
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={stateBachelor.currentTuition}
            onChange={handleBachelorInputChange}
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
              checked={stateBachelor.acceptingOption === "local"}
              onChange={handleBachelorAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="appeal">Müraciət</label>
            <input
              type="radio"
              id="appeal"
              name="accepting"
              value="appeal"
              checked={stateBachelor.acceptingOption === "appeal"}
              onChange={handleBachelorAcceptingOptionChange}
            />
          </div>
          <div>
            <label htmlFor="both">Hər ikisi</label>
            <input
              type="radio"
              id="both"
              name="accepting"
              value="both"
              checked={stateBachelor.acceptingOption === "both"}
              onChange={handleBachelorAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {stateBachelor.acceptingOption === "local" && <LocalExam />}
      {stateBachelor.acceptingOption === "appeal" && <Appealing />}
      {stateBachelor.acceptingOption === "both" && (
        <>
          <LocalExam />
          <Appealing />
        </>
      )}
    </div>
  );
};

export default Bachelor;
