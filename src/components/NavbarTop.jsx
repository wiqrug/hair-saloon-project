import React from "react";
import "./navbartop.css";
import { useLanguage } from "../contexts/LanguageContext";
import useDetails from "../hooks/useDetails";

const NavbarTop = () => {
  const translatedTextNavbarTop = [
    {
      code: "GR",
      address: "Κιοτάρι 851 09",
      email: "anel@msn.gr",
      phoneNumber: "Τηλέφωνο: 6969696969",
    },
    {
      code: "EN",
      address: "Kiotari 851 09",
      email: "anel@msn.gr",
      phoneNumber: "Phone number: 6969696969",
    },
  ];
  const { selectedLanguage, details } = useDetails(translatedTextNavbarTop);

  return (
    <div className="navbar-top">
      <div className="elements">
        <a
          href="https://maps.app.goo.gl/LuyeBYx3oTGAcpUQA"
          className="pi pi-map-marker"
          style={{ fontSize: "16px" }}
          target="_blank"
        >
          <p className="info"> {details.address}</p>
        </a>
        <i className="slash">/</i>
        <span className="pi pi-envelope" style={{ fontSize: "16px" }}>
          <p className="info"> {details.email}</p>
        </span>
      </div>

      {/* Info/Contact us */}
      <div className="elements">
        <span className="pi pi-phone" style={{ fontSize: "16px" }}>
          <p className="info">{details.phoneNumber}</p>
        </span>
        <i className="slash">/</i>
        <a
          href="https://developers.google.com/maps/documentation/urls/get-started#search-action"
          className="pi pi-facebook"
          style={{ fontSize: "1.5em" }}
          target="_blank"
        ></a>
        <a
          href="https://developers.google.com/maps/documentation/urls/get-started#search-action"
          className="pi pi-instagram"
          style={{ fontSize: "1.5em" }}
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default NavbarTop;
