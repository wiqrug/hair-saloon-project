import React from "react";

// @ts-ignore
import anelImage from "../assets/anel.png";
import { Dropdown } from "primereact/dropdown";
import useDetails from "../hooks/useDetails";
import "./navbar.css";
import DesktopNavbar from "./DesktopNavbar";

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

  //This div that is being returned, should be a different component.
  //Also i need to make a new component that is the navbar for the mobile phone.

  //Make an event listener to see the width of the screen.
  //If its mobile, render one component, else render the other component

  // @ts-ignore
  return (
    <DesktopNavbar
      anelImage={anelImage}
      details={details}
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      countries={countries}
    />
  );
};

export default Navbar;
