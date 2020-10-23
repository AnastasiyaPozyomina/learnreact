import React from "react";
import BestFeatures from "../../components/BestFeatures/BestFeatures";
import Lients from "../../components/Clients/Сlients";
import Footer from "../../components/Footer/Footer";
import MainContent from "../../components/MainContent/MainContent";
import OurTeam from "../../components/OurTeam/OurTeam";

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
        <Lients />
        <Footer />
      </div>
    );
  }
}
