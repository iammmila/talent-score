// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LeftSide.scss";
import Rectangle from "./../../assets/images/Rectangle.png";
import Logo from "./../../assets/images/Logo.png";
import Animated from "./../../assets/images/Animated.png";

const LeftSide = () => {
  return (
    <>
      <img className="rectangle" style={{width:'672.12px'}} src={Rectangle} alt="Rectangle" />
      <div className="logo-side">
        <img src={Logo} alt="Logo" />
        <span>Suni intelekt sistemi</span>
        <p>
          Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı
          faizlikdə olduğunuzu müəyyən edə biləcəksiniz.
        </p>
      </div>
      <img className="animation" src={Animated} alt="Animation" />
    </>
  );
};

export default LeftSide;
