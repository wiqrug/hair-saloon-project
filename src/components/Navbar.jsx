import React, { useEffect, useState } from "react";

// @ts-ignore
import anelImage from "../assets/anel.png";
import { Dropdown } from "primereact/dropdown";
import useDetails from "../hooks/useDetails";
import "./navbar.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  });

  // @ts-ignore
  return isMobile ? (
    <MobileNavbar />
  ) : (
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
