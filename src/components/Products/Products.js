import React from "react";

export default class Products extends React.Component {
  render() {
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
                  <div className="col-lg-4 col-md-4 all" data-category="des">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_01.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$18.25</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (12)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 all" data-category="dev">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_02.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$16.75</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (24)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 all " data-category="gra">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_03.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$32.50</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (36)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 all" data-category="gra">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_04.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$24.60</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (48)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 all" data-category="dev">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_05.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$18.75</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (60)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 all" data-category="des">
                    <div className="product-item">
                      <a href="#">
                        <img src="images/product_06.jpg" alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                          <h4>Tittle goes here</h4>
                        </a>
                        <h6>$12.50</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (72)</span>
                      </div>
                    </div>
                  </div>
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
