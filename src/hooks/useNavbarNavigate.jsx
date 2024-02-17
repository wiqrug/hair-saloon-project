import { useNavigate } from "react-router-dom";

const useNavbarNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = (key) => {
    const navigationMap = {
      home: "/home",
      aboutUs: "/about-us",
      services: "/services",
      photoGallery: "/photos",
      contactUs: "/contact-us",
    };
    const path = navigationMap[key];
    if (path) {
      navigate(path);
    }
  };

  return handleNavigate;
};

export default useNavbarNavigate;
