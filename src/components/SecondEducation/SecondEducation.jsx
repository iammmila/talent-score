import React, { useContext, useState } from "react";
import "./SecondEducation.scss";
import { customStyles } from "../../data/style-selection";
import { cities, countries, secondSelection } from "../../data/options";
import Select from "react-select";
import LocalExam from "../EducationQuestionPart2/LocalExam/LocalExam";
import Appealing from "../EducationQuestionPart2/Appealing/Appealing";
import { MainContext } from "../../context/ContextProvider";

const SecondEducation = () => {
  const { register } = useContext(MainContext);
  const [state, setState] = useState({
    country: "",
    city: "",
    universityName: "",
    speciality: "",
    startDate: "",
    endDate: "",
    currentTuition: "",
    acceptingOption: "",
  });
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setState((prevState) => ({
        ...prevState,
        [name]: checked,
        endDate: checked ? "current" : prevState.endDate,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(state);
  };
  const handleSelectChange = (name, selectedOption) => {
    setState({ ...state, [name]: selectedOption.value });
  };
  const handleAcceptingOptionChange = (event) => {
    const newValue = event.target.value;
    setState((prevState) => ({
      ...prevState,
      acceptingOption: newValue,
    }));
  };
  return (
    <div className="second-education-questions-section">
      <div className="education">
        <span>Təhsiliniz?*</span>
        <Select
          {...register("education")}
          options={secondSelection}
          styles={customStyles}
          defaultValue={state.education}
          // value={state.education}
          onChange={(selectedOption) =>
            handleSelectChange("education", selectedOption)
          }
        />
        {/* {errors.education && (
          <span style={{ color: "red" }}>{errors.education.message}</span>
        )} */}
      </div>
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
            defaultValue={state.country}
            onChange={(selectedOption) =>
              handleSelectChange("country", selectedOption)
            }
          />
          {state.country && (
            <Select
              styles={customStyles}
              options={cities}
              placeholder="Şəhər"
              className="city"
              name="city"
              defaultValue={state.city}
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
          value={state.universityName}
          onChange={handleInputChange}
        />
      </div>
      <div className="speciality">
        <span>İxtisas</span>
        <input
          type="text"
          placeholder="İxtisas adı"
          name="speciality"
          value={state.speciality}
          onChange={handleInputChange}
        />
      </div>
      <div className="dates">
        <span>Universitetə qəbul və bitirmə tarixi:</span>
        <div className="line-dates">
          <input
            type="date"
            name="startDate"
            value={state.startDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="endDate"
            value={state.currentTuition ? "current" : state.endDate}
            onChange={handleInputChange}
            disabled={state.currentTuition}
          />
        </div>
        <div className="line-current">
          <label htmlFor="current">Hal hazırda təhsil alıram</label>
          <input
            type="checkbox"
            id="current"
            name="currentTuition"
            checked={state.currentTuition}
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
              checked={state.acceptingOption === "local"}
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
              checked={state.acceptingOption === "appeal"}
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
              checked={state.acceptingOption === "both"}
              onChange={handleAcceptingOptionChange}
            />
          </div>
        </div>
      </div>
      {state.acceptingOption === "local" && <LocalExam />}
      {state.acceptingOption === "appeal" && <Appealing />}
      {state.acceptingOption === "both" && (
        <>
          <LocalExam />
          <Appealing />
        </>
      )}
    </div>
  );
};

export default SecondEducation;
