import React from "react";
import "./mobile-navbar.css";

const MobileNavbar = ({
  anelImage,
  details,
  selectedLanguage,
  setSelectedLanguage,
  countries,
}) => {
  return (
    <div className="mobile-navbar-container">
      <img className="mobile-image-logo" src={anelImage} alt="ΑΝΕΛ" />
      <div className="menu-bar-container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
