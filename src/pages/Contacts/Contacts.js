import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Lients from "../../components/Clients/Сlients";
import Footer from "../../components/Footer/Footer";
import FindUs from "../../components/FindUs/FindUs";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          h2={"LET’S GET IN TOUCH"}
          h4={"CONTACT US"}
          className={"page-heading contact-heading header-text"}
        />
        <FindUs />
        <Lients />
        <Footer />
      </div>
    );
  }
}
