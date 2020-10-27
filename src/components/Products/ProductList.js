import React from "react";
import CardProduct from "./CardProduct";
import productsData from './ProductsData';


export default class ProductList extends React.Component {
  render() {
    const productComponents = productsData.map(elem => (
      <CardProduct
        key={elem.id}
        title={elem.title}
        price = {elem.price}
        description={elem.description}
        img={elem.img} 
      />
    ));
    return (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="filters">
                <ul>
                  <li className="active" data-filter="">
                    All Products
                  </li>
                  <li data-filter="des">Featured</li>
                  <li data-filter="dev">Flash Deals</li>
                  <li data-filter="gra">Last Minute</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="filters-content filter-gallery">
                <div className="row grid">
                 {productComponents}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="pages">
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
