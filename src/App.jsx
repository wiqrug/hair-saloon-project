// App.js
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NavbarTop from "./components/navbar_components/NavbarTop";
import Navbar from "./components/navbar_components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Photos from "./components/Photos";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <PrimeReactProvider>
      <LanguageProvider>
        <NavbarTop />
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </PrimeReactProvider>
  );
}

export default App;
