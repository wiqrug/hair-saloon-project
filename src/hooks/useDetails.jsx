import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const useDetails = (translatedText) => {
  const { selectedLanguage, setSelectedLanguage, countries } = useLanguage();

  const details = translatedText.find(
    (lang) => lang.code == selectedLanguage.code
  );

  return { details, selectedLanguage, setSelectedLanguage, countries };
};

export default useDetails;
