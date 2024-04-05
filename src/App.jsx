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
  //This can be refactored, by having an array of objects called route store the path and the elements
  //and then iterate through this array using map, to generate these components.
  //The reason im not doing it right now, is because these components might need some properties
  return (
    <PrimeReactProvider>
      <LanguageProvider>
        <BrowserRouter>
          <NavbarTop />
          <Navbar />
          <Routes>
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
