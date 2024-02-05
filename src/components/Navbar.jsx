import React, { useEffect, useState } from "react";
import "./navbar.css";
// @ts-ignore
import anelImage from "../assets/anel.png";
import { Dropdown } from "primereact/dropdown";

const Navbar = ({ countries }) => {
  const languages = [
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
  const [selectedLanguage, setSelectedLanguage] = useState(countries[0]);
  const [details, setDetails] = useState(
    languages.find((lang) => lang.code == selectedLanguage.code)
  );

  useEffect(() => {
    const newDetails = languages.find(
      (lang) => lang.code == selectedLanguage.code
    );
    setDetails(newDetails);
  }, [selectedLanguage]);

  // @ts-ignore
  console.log(Object.entries(details));
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
