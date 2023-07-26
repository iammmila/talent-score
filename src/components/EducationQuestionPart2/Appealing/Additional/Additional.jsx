import React from "react";
import "./Additional.scss";
const Additional = () => {
  return (
    <div className="additional">
      <span>
        <span style={{ color: "#038477", fontWeight: 600 }}>Seçdiyiniz</span>{" "}
        imtahanın adını, topladığınız bal və maksimal balı qeyd edin.
      </span>
      <div>
        <input className="test-name" type="text" placeholder="İmtahanın adı" />
        <input className="score" type="number" placeholder="Balınız" />
        <input className="max-score" type="number" placeholder="Maksimal bal" />
      </div>
    </div>
  );
};

export default Additional;
