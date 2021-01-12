import React from 'react';
import Filter from '../Filter';
import data from '../../data.json';
import Product from './Product';
import './Product.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../store/actions/productActions';

export default () => {
  // const products = data.products;
  const dispatch = useDispatch ();
  const products = useSelector (state => state.products.fetchedProducts);
  const productsList = products.map (product => (
    <Product
      key={product._id}
      product={product}
      title={product.title}
      image={product.image}
      price={product.price}
      star={product.star}
    />
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="filters">
              <Filter />
            </div>
          </div>
          <div className="col-md-12">
            <div className="filters-content">
              <ul className="row grid">
                {productsList}
              </ul>

              <div className="col-md-12">
                <button
                  className="filled-button"
                  onClick={() => dispatch (fetchProducts ())}
                >
                  LOAD MORE
                </button>
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
  );
};
