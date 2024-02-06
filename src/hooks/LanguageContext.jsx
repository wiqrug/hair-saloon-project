// LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// @ts-ignore
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const countries = [
    { name: "🇬🇷", code: "GR" },
    { name: "🇺🇸", code: "EN" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(countries[0]);

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, countries }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
