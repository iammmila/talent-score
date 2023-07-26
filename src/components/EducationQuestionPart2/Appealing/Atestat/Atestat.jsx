import React from "react";
import "./Atestat.scss";
const Atestat = () => {
  return (
    <div className="atestat">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>Atestat - GPA</span>{" "}
        üzrə nəticəni qeyd edin.
      </span>
      <input type="text" placeholder="Nəticə" />
    </div>
  );
};

export default Atestat;
