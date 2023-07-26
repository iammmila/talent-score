import React from "react";
import "./Appealing.scss";
import Select from "react-select";
import { appealing } from "./../../../data/options";
const Appealing = () => {
  const customStyles = {
    // Style for the selected option
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
      color: state.isSelected ? "white" : "#038477",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
      color: state.isSelected ? "white" : "#038477",
    }),
  };
  return (
    <div className="appealing">
      <span>
        Müraciyyət zamanı hansı kriteryalarla müraciətinizin
        qiymətləndirildiyini qeyd edin.
      </span>
      <div className="appealing-div">
        <Select
          styles={customStyles}
          options={appealing}
          className="appeling-section"
          placeholder="Select"
        />
        <button>Əlavə et +</button>
      </div>
    </div>
  );
};

export default Appealing;
