import React from "react";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banners/Banner";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Footer />
      </div>
    );
  }
}
