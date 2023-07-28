import React from "react";
import "./Lists.scss";
import Delete from "./../../assets/icons/Delete.svg";
import { useContext } from "react";
import { MainContext } from "./../../context/ContextProvider";

const Lists = () => {
  const { setShowSecondAdditional } = useContext(MainContext);
  const handleClick = (event) => {
    event.preventDefault();
    setShowSecondAdditional(true);
  };
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
      <button className="new-info" onClick={handleClick}>
        Yeni Təhsil məlumatları əlavə et +
      </button>
    </div>
  );
};

export default Lists;
