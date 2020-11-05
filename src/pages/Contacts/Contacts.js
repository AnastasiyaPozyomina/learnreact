import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Clients from "../../components/Clients/Сlients";
import Footer from "../../components/Footer/Footer";
import FindUs from "../../components/FindUs/FindUs";
import SendMessage from "../../components/SendMessage/SendMessage";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          title={"LET’S GET IN TOUCH"}
          subtitle={"CONTACT US"}
          className={"page-heading contact-heading header-text"}
        />
        <FindUs />
        <SendMessage />
        <Clients />
        <Footer />
      </div>
    );
  }
}
