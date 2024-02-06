import React, { useEffect, useState } from "react";
import "./navbar.css";
// @ts-ignore
import anelImage from "../assets/anel.png";
import { Dropdown } from "primereact/dropdown";
import { useLanguage } from "../hooks/LanguageContext";

const Navbar = () => {
  const translatedTextNavbar = [
    {
      code: "GR",
      home: "ΚΕΝΤΡΙΚΗ ΣΕΛΙΔΑ",
      aboutUs: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
      services: "ΥΠΗΡΕΣΙΕΣ",
      photoGallery: "ΦΩΤΟΓΡΑΦΙΕΣ",
      contactUs: "ΕΠΙΚΟΙΝΩΝΙΑ",
    },
    {
      code: "EN",
      home: "HOME",
      aboutUs: "ABOUT US",
      services: "SERVICES",
      photoGallery: "PHOTO GALLERY",
      contactUs: "CONTACT US",
    },
  ];
  const { selectedLanguage, setSelectedLanguage, countries } = useLanguage();

  const [details, setDetails] = useState(
    translatedTextNavbar.find((lang) => lang.code == selectedLanguage.code)
  );

  useEffect(() => {
    const newDetails = translatedTextNavbar.find(
      (lang) => lang.code == selectedLanguage.code
    );
    setDetails(newDetails);
  }, [selectedLanguage]);

  return (
    <div className="navbar-bot">
      <img className="image-logo" src={anelImage} alt="ΑΝΕΛ"></img>
      {details &&
        Object.entries(details).map(([key, value]) => {
          if (key !== "code") {
            return <p key={key}>{value}</p>;
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

export default Navbar;
