import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import ProductsPage from "../../components/Products/FetchedProducts";
import Footer from "../../components/Footer/Footer";

export default class OurProducts extends React.Component {
  render() {
    return (
      <div>
        <MainContent
          title={"SIXTEEN PRODUCTS"}
          subtitle={"NEW ARRIVALS"}
          className={"page-heading products-heading header-text"}
        />
        <ProductsPage />
        <Footer />
      </div>
    );
  }
}
