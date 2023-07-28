import React from "react";
import "./Atestat.scss";
import { useState } from "react";
const Atestat = () => {
  const [atestatResult, setAtestatResult] = useState("");
  // !LIMIT
  const handleAtestatChange = (event) => {
    let inputValue = event.target.value;
    if (
      inputValue === "" ||
      (inputValue >= 0 && inputValue <= parseInt(100, 10))
    ) {
      setAtestatResult(inputValue);
    }
  };
  return (
    <div className="atestat">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>Atestat - GPA</span>{" "}
        üzrə nəticəni qeyd edin.
      </span>
      <input
        type="number"
        placeholder="Nəticə: 0-100"
        value={atestatResult}
        onChange={handleAtestatChange}
      />
    </div>
  );
};

export default Atestat;
