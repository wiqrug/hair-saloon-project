import React, { useEffect, useState } from "react";

// @ts-ignore
import anelImage from "../assets/anel.png";
import { Dropdown } from "primereact/dropdown";
import { useLanguage } from "../contexts/LanguageContext";
import useDetails from "../hooks/useDetails";
import "./navbar.css";

const Navbar = () => {
  //All the translated texts should start with code: "GR" or code: "EN"
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

  const { countries, selectedLanguage, setSelectedLanguage, details } =
    useDetails(translatedTextNavbar);

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
