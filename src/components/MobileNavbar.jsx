import React, { useState } from "react";
import "./mobile-navbar.css";
import { Dropdown } from "primereact/dropdown"; // Ensure you have this imported

const MobileNavbar = ({
  anelImage,
  details,
  selectedLanguage,
  setSelectedLanguage,
  countries,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="mobile-navbar-container">
      <div className="top-bar">
        <img className="mobile-image-logo" src={anelImage} alt="ΑΝΕΛ" />
        <div
          className={`menu-bar-container ${menuOpen ? "change" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {menuOpen && (
        <div className="menu-items-container active">
          {details &&
            Object.entries(details).map(([key, value], index) => {
              if (key !== "code") {
                return (
                  <>
                    <p
                      className={`mobile-menu menu-item`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                      key={key}
                    >
                      {value}
                    </p>
                  </>
                );
              }

              return null;
            })}
          <div className="mobile-dropdown dropdown-container">
            <Dropdown
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="Language"
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
