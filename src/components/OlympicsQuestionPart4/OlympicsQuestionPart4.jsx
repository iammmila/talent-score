import React from "react";
import "./OlympicsQuestionPart4.scss";
import Select from "react-select";
import { subjects, levels, spots } from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../context/ContextProvider";

const OlympicsQuestionPart4 = () => {
  const { register, stateOlympics, handleOlympicsSelectChange } =
    useContext(MainContext);

  useEffect(() => {
    console.log(stateOlympics);
  }, [stateOlympics]);

  return (
    <>
      <div className="olympics-ques1">
        <span>Hansı fənn üzrə olimpiyada qalibi olmusunuz?</span>
        <Select
          {...register("subject")}
          styles={customStyles}
          options={subjects}
          value={
            stateOlympics.subject
              ? {
                  label: stateOlympics.subject,
                  value: stateOlympics.subject,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleOlympicsSelectChange("subject", selectedOption)
          }
        />
      </div>
      <div className="olympics-ques2">
        <span>Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?</span>
        <Select
          {...register("level")}
          styles={customStyles}
          options={levels}
          value={
            stateOlympics.level
              ? {
                  label: stateOlympics.level,
                  value: stateOlympics.level,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleOlympicsSelectChange("level", selectedOption)
          }
        />
      </div>
      <div className="olympics-ques3">
        <span>Neçənci yer əldə etmisiniz?</span>
        <Select
          {...register("spot")}
          styles={customStyles}
          options={spots}
          value={
            stateOlympics.spot
              ? {
                  label: stateOlympics.spot,
                  value: stateOlympics.spot,
                }
              : null
          }
          placeholder={"Seçin..."}
          onChange={(selectedOption) =>
            handleOlympicsSelectChange("spot", selectedOption)
          }
        />
      </div>
    </>
  );
};

export default OlympicsQuestionPart4;
