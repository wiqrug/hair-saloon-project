import { Dropdown } from "primereact/dropdown";
import React from "react";
import useNavbarNavigate from "../../hooks/useNavbarNavigate";

const DesktopNavbar = ({
  anelImage,
  details,
  selectedLanguage,
  setSelectedLanguage,
  countries,
}) => {
  const handleNavigate = useNavbarNavigate();

  return (
    <div className="navbar-bot">
      <img className="image-logo" src={anelImage} alt="Logo"></img>
      {details &&
        Object.entries(details).map(([key, value]) => {
          if (key !== "code") {
            return (
              <p
                className="menu-items"
                key={key}
                onClick={() => handleNavigate(key)}
              >
                {value}
              </p>
            );
          }
          return null;
        })}
      <Dropdown
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.value)}
        options={countries}
        optionLabel="name"
        placeholder="Language"
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default DesktopNavbar;
