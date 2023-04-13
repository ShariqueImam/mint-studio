import React from "react";
import Contact from "../../components/ContactPage/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
const index = () => {
  return (
    <div>
      <div className="bg-green-700">
        <Navbar />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
