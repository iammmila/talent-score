import React from "react";
import "./ButtonPost.scss";

const ButtonPost = () => {
  const handleClick = (event) => event.preventDefault();
  return (
    <button onClick={handleClick} className="button-post" type="submit">
      Təsdiq Et
    </button>
  );
};

export default ButtonPost;
