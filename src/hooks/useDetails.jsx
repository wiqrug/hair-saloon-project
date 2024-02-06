import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const useDetails = (translatedText) => {
  const { selectedLanguage, setSelectedLanguage, countries } = useLanguage();

  const [details, setDetails] = useState(
    translatedText.find((lang) => lang.code == selectedLanguage.code)
  );

  useEffect(() => {
    const newDetails = translatedText.find(
      (lang) => lang.code == selectedLanguage.code
    );
    setDetails(newDetails);
  }, [selectedLanguage]);
  return { details, selectedLanguage, setSelectedLanguage, countries };
};

export default useDetails;
