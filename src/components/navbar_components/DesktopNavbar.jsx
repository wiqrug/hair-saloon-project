import { Dropdown } from "primereact/dropdown";
import React from "react";

const DesktopNavbar = ({
  anelImage,
  details,
  selectedLanguage,
  setSelectedLanguage,
  countries,
}) => {
  return (
    <div className="navbar-bot">
      <img className="image-logo" src={anelImage} alt="ΑΝΕΛ"></img>
      {details &&
        Object.entries(details).map(([key, value]) => {
          if (key !== "code") {
            return (
              <p className="menu-items" key={key}>
                {value}
              </p>
            );
          }
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
