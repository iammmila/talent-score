import React from "react";
import "./LocalExam.scss";

const LocalExam = () => {
  return (
    <div className="local-exam">
      <span>
        Lokal imtahanın adını, topladığınız bal və maksimal balı qeyd edin.
      </span>
      <div>
        <input className="test-name" type="text" placeholder="Testin adı" />
        <input className="score" type="number" placeholder="Balınız" />
        <input className="max-score" type="number" placeholder="Maksimal bal" />
      </div>
    </div>
  );
};

export default LocalExam;
