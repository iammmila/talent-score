import React from "react";
import "./Master.scss";
import LocalExam from "../../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../../EducationQuestionPart2/Appealing/Appealing";
import { useContext } from "react";
import { MainContext } from "../../../context/ContextProvider";
import Select from "react-select";
import { customStyles } from "../../../data/style-selection";
import { cities, countries } from "../../../data/options";

const Master = () => {
  const { register, stateMaster, setStateMaster } = useContext(MainContext);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setStateMaster((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setStateMaster((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(stateMaster);
  };
  const handleSelectChange = (name, selectedOption) => {
    setStateMaster({ ...stateMaster, [name]: selectedOption.label });
  };
  const handleAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setStateMaster((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  return (
    <div className="master-education-questions-section">
      <div className="master">
        <span>
          <span style={{ color: "#038477" }}>Magistratura</span> pilləsi barədə
          məlumatları qeyd edin
        </span>
        <div className="selections">
          <Select
            styles={customStyles}
            options={countries}
            placeholder="Ölkə"
            className="country"
            name="country"
            defaultValue={stateMaster.country}
            onChange={(selectedOption) =>
              handleSelectChange("country", selectedOption)
            }
          />
          {stateMaster.country && (
            <Select
              styles={customStyles}
              options={cities}
              placeholder="Şəhər"
              className="city"
              name="city"
              defaultValue={stateMaster.city}
              // value={stateMaster.city}
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
          value={stateMaster.universityName}
          onChange={handleInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={stateMaster.speciality}
          onChange={handleInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            type="date"
            name="startDate"
            value={stateMaster.startDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="endDate"
            value={stateMaster.currentTuition ? "current" : stateMaster.endDate}
            onChange={handleInputChange}
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
              checked={stateMaster.acceptingOption === "local"}
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
              checked={stateMaster.acceptingOption === "appeal"}
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
              checked={stateMaster.acceptingOption === "both"}
              onChange={handleAcceptingOptionChange}
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
