import React from "react";
import MainContent from "../components/MainContent/MainContent";
import Products from "../components/Products/Products";

export default class OurProducts extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          h2={"SIXTEEN PRODUCTS"}
          h4={"NEW ARRIVALS"}
          className={"page-heading products-heading header-text"}
        />
        <Products />
      </div>
    );
  }
}
