import React, { Fragment } from "react";
import "./Lists.scss";
import Delete from "./../../assets/icons/Delete.svg";
import { useContext } from "react";
import { MainContext } from "./../../context/ContextProvider";

const Lists = () => {
  const {
    setShowSecondAdditional,
    stateBachelor,
    stateMaster,
    statePhd,
    setStatePhd,
    stateNew,
    setStateNew,
    setStateMaster,
    setStateBachelor,
  } = useContext(MainContext);
  const handleClick = (event) => {
    event.preventDefault();
    setShowSecondAdditional(true);
  };
  const handleDeleteBach = () => {
    setStateBachelor({});
  };
  const handleDeleteMaster = () => {
    setStateMaster({});
  };
  const handleDeletePHD = () => {
    setStatePhd({});
  };
  const handleDeleteNew = () => {
    setStateNew({});
  };
  return (
    <div className="end-part">
      <ul className="lists">
        {stateBachelor.universityName !== "" &&
          (Object.keys(stateBachelor).length === 0 ? null : (
            <li>
              <div className="id-section">1.</div>
              <div className="uni-name">{stateBachelor.universityName}</div>
              <div className="degree-name">Bakalavr</div>
              <div className="date">
                {stateBachelor.startDate} - {stateBachelor.endDate}
              </div>
              <div className="delete" onClick={handleDeleteBach}>
                <img src={Delete} alt="delete icon" />
              </div>
            </li>
          ))}
        {stateMaster.universityName !== "" &&
          Object.keys(stateMaster).length > 0 && (
            <li>
              <div className="id-section">2.</div>
              <div className="uni-name">{stateMaster.universityName}</div>
              <div className="degree-name">Master</div>
              <div className="date">
                {stateMaster.startDate} - {stateMaster.endDate}
              </div>
              <div className="delete" onClick={handleDeleteMaster}>
                <img src={Delete} alt="delete icon" />
              </div>
            </li>
          )}
        {statePhd.universityName !== "" && Object.keys(statePhd).length > 0 && (
          <li>
            <div className="id-section">2.</div>
            <div className="uni-name">{statePhd.universityName}</div>
            <div className="degree-name">PHD</div>
            <div className="date">
              {statePhd.startDate} - {statePhd.endDate}
            </div>
            <div className="delete" onClick={handleDeletePHD}>
              <img src={Delete} alt="delete icon" />
            </div>
          </li>
        )}
        {stateNew.universityName !== "" && Object.keys(stateNew).length > 0 && (
          <li>
            <div className="id-section">4.</div>
            <div className="uni-name">{stateNew.universityName}</div>
            <div className="degree-name">{stateNew.degree}</div>
            <div className="date">
              {stateNew.startDate} - {stateNew.endDate}
            </div>
            <div className="delete" onClick={handleDeleteNew}>
              <img src={Delete} alt="delete icon" />
            </div>
          </li>
        )}
      </ul>
      <button className="new-info" onClick={handleClick}>
        Yeni Təhsil məlumatları əlavə et +
      </button>
    </div>
  );
};

export default Lists;
