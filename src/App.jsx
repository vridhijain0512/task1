import React from "react";
import ContactUs from "./components/ContactUs";
import CorporateBrands from "./components/CorporateBrands";
import FinalFooter from "./components/FinalFooter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import PartnerVenu from "./components/PartnerVenu";
import RenownedPersonalities from "./components/RenownedPersonalities";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__container">
          <Navbar />
          <PartnerVenu />
          <CorporateBrands />
          <RenownedPersonalities />
          <Testimonials />
          <ContactUs />
          <Footer />
          <FinalFooter />
        </div>
      </div>
    </>
  );
};

export default App;
