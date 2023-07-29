import React from "react";
import "./Phd.scss";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import { cities, countries } from "../../../data/options";
import { customStyles } from "../../../data/style-selection";
import Select from "react-select";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";

const Phd = () => {
  const { register, statePhd, setStatePhd } = useContext(MainContext);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStatePhd((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStatePhd((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(statePhd);
  };
  const handleSelectChange = (name, selectedOption) => {
    setStatePhd({ ...statePhd, [name]: selectedOption.label });
  };
  const handleAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStatePhd((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  return (
    <div className="phd-education-questions-section">
      <div className="phd">
        <span>
          <span style={{ color: "#038477" }}>PhD</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            styles={customStyles}
            options={countries}
            placeholder="Ölkə"
            className="country"
            name="country"
            defaultValue={statePhd.country}
            onChange={(selectedOption) =>
              handleSelectChange("country", selectedOption)
            }
          />
          {statePhd.country && (
            <Select
              styles={customStyles}
              options={cities}
              placeholder="Şəhər"
              className="city"
              name="city"
              defaultValue={statePhd.city}
              // value={statePhd.city}
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
          value={statePhd.universityName}
          onChange={handleInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={statePhd.speciality}
          onChange={handleInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            type="date"
            name="startDate"
            value={statePhd.startDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="endDate"
            value={statePhd.currentTuition ? "current" : statePhd.endDate}
            onChange={handleInputChange}
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
              checked={statePhd.acceptingOption === "local"}
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
              checked={statePhd.acceptingOption === "appeal"}
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
              checked={statePhd.acceptingOption === "both"}
              onChange={handleAcceptingOptionChange}
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
