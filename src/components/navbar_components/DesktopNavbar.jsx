import { Dropdown } from "primereact/dropdown";
import React from "react";
import { useNavigate } from "react-router-dom";

const DesktopNavbar = ({
  anelImage,
  details,
  selectedLanguage,
  setSelectedLanguage,
  countries,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (key) => {
    if (key === "home") {
      navigate("/home");
    }
    if (key === "aboutUs") {
      navigate("/about-us");
    }
    if (key === "services") {
      navigate("/services");
    }
    if (key === "photoGallery") {
      navigate("/photos");
    }
    if (key === "contactUs") {
      navigate("/contact-us");
    }
  };

  return (
    <div className="navbar-bot">
      <img className="image-logo" src={anelImage} alt="ΑΝΕΛ"></img>
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
