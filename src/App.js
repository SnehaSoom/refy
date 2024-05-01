import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ABDLandingPage from "./components/ABDLandingPage/ABDLandingPage";
import ABDCareer from "./components/ABDCareer/ABDCareer";
import ABDContactUs from "./components/ABDContactUs/ABDContactUs";
import ABDAboutUs from "./components/ABDAboutUs/ABDAboutUs";
import ABDPricing from "./components/ABDPricing/ABDPricing";
import ABDCart from "./components/ABDCart/ABDCart";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/abdlandingpagev2":
        title = "";
        metaDescription = "";
        break;
      case "/abdcareer":
        title = "";
        metaDescription = "";
        break;
      case "/abdcontactus":
        title = "";
        metaDescription = "";
        break;
      case "/abdaboutus":
        title = "";
        metaDescription = "";
        break;
      case "/abdpricing":
        title = "";
        metaDescription = "";
        break;
      case "/abdcart":
        title = "";
        metaDescription = "";
        break;
      case "/components":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ABDLandingPage />} />
           <Route path="/abdcareer" element={<ABDCareer />} />
      <Route path="/abdcontactus" element={<ABDContactUs />} />
      <Route path="/abdaboutus" element={<ABDAboutUs />} />
      <Route path="/abdpricing" element={<ABDPricing />} />
      <Route path="/abdcart" element={<ABDCart />} />
          </Routes>
  );
}
export default App;
