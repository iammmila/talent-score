// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./EducationQuestionPart2.scss";
import { MainContext } from "../../context/ContextProvider";

const EducationQuestionPart2 = () => {
  const { renderEducation } = useContext(MainContext);
  return <>{renderEducation()}</>;
};

export default EducationQuestionPart2;
