import React, { useState } from "react";
import "./Appealing.scss";
import Select from "react-select";
import { appealing } from "./../../../data/options";
import { customStyles } from "../../../data/style-selection";
import Atestat from "./Atestat/Atestat";
import LanguageTest from "./LanguageTest/LanguageTest";
import Sat from "./SAT/Sat";
import Additional from "./Additional/Additional";
const Appealing = () => {
  const [selectedAppeal, setSelectedAppeal] = useState("");
  const [showAdditional, setShowAdditional] = useState(false);
  const handleSelected = (event) => {
    setSelectedAppeal(event.value);
  };
  const handleButtonClick = (event) => {
    setShowAdditional(true);
    event.preventDefault();
  };
  return (
    <>
      <div className="appealing">
        <span>
          Müraciyyət zamanı hansı kriteryalarla müraciətinizin
          qiymətləndirildiyini qeyd edin.
        </span>
        <div className="appealing-div">
          <Select
            value={selectedAppeal}
            onChange={handleSelected}
            styles={customStyles}
            options={appealing}
            className="appeling-section"
            placeholder={selectedAppeal === "" ? "Select" : selectedAppeal}
          />
          <button onClick={handleButtonClick}>Əlavə et +</button>
        </div>
      </div>
      {showAdditional && <Additional />}
      {selectedAppeal === "Atestat" && <Atestat />}
      {selectedAppeal === "Languages" && <LanguageTest />}
      {selectedAppeal === "SAT" && <Sat />}
    </>
  );
};

export default Appealing;
