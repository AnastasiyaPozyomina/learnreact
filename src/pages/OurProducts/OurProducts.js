import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Products from "../../components/Products/ProductsPage";

export default class OurProducts extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          title={"SIXTEEN PRODUCTS"}
          subtitle={"NEW ARRIVALS"}
          className={"page-heading products-heading header-text"}
        />
        <Products />
      </div>
    );
  }
}
