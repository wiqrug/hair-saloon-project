import React from "react";

// @ts-ignore
import anelImage from "../../assets/anel.png";
import useDetails from "../../hooks/useDetails";
import "./navbar.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useIsMobile from "../../hooks/useIsMobile";

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

  const isMobile = useIsMobile();

  // @ts-ignore
  return isMobile ? (
    <MobileNavbar
      anelImage={anelImage}
      details={details}
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      countries={countries}
    />
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
