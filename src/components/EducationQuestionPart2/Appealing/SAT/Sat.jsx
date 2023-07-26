import React from "react";
import "./Sat.scss";
const Sat = () => {
  return (
    <div className="sat">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>SAT </span>
        üzrə nəticəni qeyd edin.
      </span>
      <input type="text" placeholder="Nəticə" />
    </div>
  );
};

export default Sat;
