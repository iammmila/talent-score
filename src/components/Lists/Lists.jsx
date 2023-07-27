import React from "react";
import "./Lists.scss";
import Delete from "./../../assets/icons/Delete.svg";

const Lists = () => {
  return (
    <div className="end-part">
      <ul className="lists">
        <li className="id-section">1.</li>
        <li className="uni-name">Azərbaycan Neft və Sənayə Universiteti</li>
        <li className="degree-name">Bakalavr</li>
        <li className="date">10/2022 - 03/2023</li>
        <li className="delete">
          <img src={Delete} alt="delete icon" />
        </li>
      </ul>
      <button className="new-info">Yeni Təhsil məlumatları əlavə et +</button>
    </div>
  );
};

export default Lists;
