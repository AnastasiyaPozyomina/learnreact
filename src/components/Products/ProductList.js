import React from 'react';
import Filter from '../Filter';
import data from './../../data.json';
import Product from './Product';

export default class ProductList extends React.Component {
  constructor () {
    super ();
    this.state = {
      products: data.products,
      cartItems: [],
      size: '',
      sort: '',
    };
  }

  sortProducts = event => {
    const sort = event.target.value;
    this.setState (state => ({
      sort: sort,
      products: this.state.products
        .slice ()
        .sort (
          (a, b) =>
            sort === 'lowest'
              ? a.price > b.price ? 1 : -1
              : sort === 'highest'
                  ? a.price < b.price ? 1 : -1
                  : a._id > b._id ? 1 : -1
        ),
    }));
  };
  filterProducts = event => {
    if (event.target.value === 'ALL') {
      this.setState ({size: event.target.value, products: data.products});
    } else {
      this.setState ({
        size: event.target.value,
        products: data.products.filter (
          product => product.availableSizes.indexOf (event.target.value) >= 0
        ),
      });
    }
  };
  render () {
    return (
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="filters">
                <Filter
                  count={this.state.products.length}
                  sort={this.state.sort}
                  size={this.state.size}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="filters-content">
                <div class="row grid">
                  <Product products={this.state.products} />
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
                          <i className="fa fa-angle-double-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
