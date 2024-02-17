// App.js
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NavbarTop from "./components/navbar_components/NavbarTop";
import Navbar from "./components/navbar_components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <PrimeReactProvider>
      <LanguageProvider>
        <NavbarTop />
        <Navbar />
      </LanguageProvider>
    </PrimeReactProvider>
  );
}

export default App;
