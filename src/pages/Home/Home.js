import React from "react";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banners/Banner";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <AboutCompany
        title = {"About Sixteen Clothing"}
        />
        <Footer />
      </div>
    );
  }
}
