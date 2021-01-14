import React from "react";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banners/Banner";

export default function Home () {
    return (
      <>
        <Banner />
        <AboutCompany
        title = {"About Sixteen Clothing"}
        />
        <Footer />
      </>
    );
  }

