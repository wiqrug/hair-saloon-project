import React from "react";
import "./navbartop.css";

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="elements">
        <a
          href="https://maps.app.goo.gl/LuyeBYx3oTGAcpUQA"
          className="pi pi-map-marker"
          style={{ fontSize: "16px" }}
          target="_blank"
        >
          <p className="info"> Υμηττού 1, Χολαργός</p>
        </a>
        <i className="slash">/</i>
        <span className="pi pi-envelope" style={{ fontSize: "16px" }}>
          <p className="info"> pepezerk@gmail.com</p>
        </span>
      </div>

      {/* Info/Contact us */}
      <div className="elements">
        <span className="pi pi-phone" style={{ fontSize: "16px" }}>
          <p className="info">Τηλέφωνο: 696969696969</p>
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
