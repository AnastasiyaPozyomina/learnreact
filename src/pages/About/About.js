import React from "react";
import BestFeatures from "../../components/BestFeatures/BestFeatures";
import Clients from "../../components/Clients/Сlients";
import Footer from "../../components/Footer/Footer";
import MainContent from "../../components/MainContent/MainContent";
import OurTeam from "../../components/OurTeam/OurTeam";
import Services from "../../components/Services/Services";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          h2={"OUR COMPANY"}
          h4={"ABOUT US"}
          className={"page-heading about-heading header-text"}
        />
        <BestFeatures />
        <OurTeam />
        <Services />
        <Clients />
        <Footer />
      </div>
    );
  }
}
