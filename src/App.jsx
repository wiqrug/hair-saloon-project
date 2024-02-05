import "./App.css";
import React from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import NavbarTop from "./components/NavbarTop";
import "primeicons/primeicons.css";
import Navbar from "./components/Navbar";

// import "primeicons/primeicons.css";

function App() {
  return (
    <PrimeReactProvider>
      <NavbarTop />
      <Navbar />
    </PrimeReactProvider>
  );
}

export default App;
