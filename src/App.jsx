// App.js
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Services,
  Photos,
  AboutUs,
  ContactUs,
  NavbarTop,
  Navbar,
} from "./components";

function App() {
  return (
    <PrimeReactProvider>
      <LanguageProvider>
        <NavbarTop />
        <Navbar />
        <BrowserRouter>
          <Routes>
            {/* change this to "/" later on  */}
            <Route path="/home" element={<Home />} />
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
