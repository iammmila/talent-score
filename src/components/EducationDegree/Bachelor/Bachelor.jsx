import React from "react";
import "./Bachelor.scss";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";
import Select from "react-select";
import { customStyles } from "../../../data/style-selection";
import { cities, countries } from "../../../data/options";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";

const Bachelor = () => {
  const { stateBachelor, setStateBachelor } = useContext(MainContext);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStateBachelor((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStateBachelor((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(stateBachelor);
  };
  const handleSelectChange = (name, selectedOption) => {
    setStateBachelor({ ...stateBachelor, [name]: selectedOption.label });
  };
  const handleAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStateBachelor((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  return (
    <div className="bachelor-education-questions-section">
      <div className="bachelor">
        <span>
          <span style={{ color: "#038477" }}>Bakalavr</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            styles={customStyles}
            options={countries}
            placeholder="Ölkə"
            className="country"
            name="country"
            defaultValue={stateBachelor.country}
            onChange={(selectedOption) =>
              handleSelectChange("country", selectedOption)
            }
          />
          {stateBachelor.country && (
            <Select
              styles={customStyles}
              options={cities}
              placeholder="Şəhər"
              className="city"
              name="city"
              defaultValue={stateBachelor.city}
              // value={state.city}
              onChange={(selectedOption) =>
                handleSelectChange("city", selectedOption)
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
          value={stateBachelor.universityName}
          onChange={handleInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={stateBachelor.speciality}
          onChange={handleInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            type="date"
            name="startDate"
            value={stateBachelor.startDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="endDate"
            value={
              stateBachelor.currentTuition ? "current" : stateBachelor.endDate
            }
            onChange={handleInputChange}
            disabled={stateBachelor.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={stateBachelor.currentTuition}
            onChange={handleInputChange}
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
              onChange={handleAcceptingOptionChange}
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
              onChange={handleAcceptingOptionChange}
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
              onChange={handleAcceptingOptionChange}
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
