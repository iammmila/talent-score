import React from "react";
import "./OlympicsQuestionPart4.scss";
import Select from "react-select";
import { subjects, levels, spots } from "../../data/options";
import { customStyles } from "./../../data/style-selection";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../context/ContextProvider";

const OlympicsQuestionPart4 = () => {
  const { register } = useContext(MainContext);
  const [stateOlympics, setStateOlympics] = useState({
    subject: "",
    level: "",
    spot: "",
  });
  const handleSelectChange = (name, selectedOption) => {
    const selectedValue = selectedOption.label;
    setStateOlympics({ ...stateOlympics, [name]: selectedValue });
  };
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
          defaultValue={stateOlympics.subject}
          onChange={(selectedOption) =>
            handleSelectChange("subject", selectedOption)
          }
        />
      </div>
      <div className="olympics-ques2">
        <span>Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?</span>
        <Select
          {...register("level")}
          styles={customStyles}
          options={levels}
          defaultValue={stateOlympics.level}
          onChange={(selectedOption) =>
            handleSelectChange("level", selectedOption)
          }
        />
      </div>
      <div className="olympics-ques3">
        <span>Neçənci yer əldə etmisiniz?</span>
        <Select
          {...register("spot")}
          styles={customStyles}
          options={spots}
          defaultValue={stateOlympics.spot}
          onChange={(selectedOption) =>
            handleSelectChange("spot", selectedOption)
          }
        />
      </div>
    </>
  );
};

export default OlympicsQuestionPart4;
