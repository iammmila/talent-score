import React from "react";
import "./Sat.scss";
import { useState } from "react";
const Sat = () => {
  const [satResult, setSatResult] = useState("");
  const handleSatChange = (event) => {
    let inputValue = event.target.value;
    if (
      inputValue === "" ||
      (inputValue >= 0 && inputValue <= parseInt(1600, 10))
    ) {
      setSatResult(inputValue);
    }
  };
  return (
    <div className="sat">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>SAT </span>
        üzrə nəticəni qeyd edin.
      </span>
      <input
        type="text"
        placeholder="Nəticə: 0-1600"
        value={satResult}
        onChange={handleSatChange}
      />
    </div>
  );
};

export default Sat;
