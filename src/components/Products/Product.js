import React from 'react';
import {Link} from 'react-router-dom';
import formatCurrency from '../../util';
import StarRating from '../Rating/StarRating';

export default class Product extends React.Component {
  render () {
    return (
      <ul className="row grid">
        <li className="col-lg-3 col-md-3">
          <Link to={'our-products/'} target="_blank" className="product-item">
            <img src="#" />
          </Link>

          <div className="down-content">
            <Link to={'our-products/'} target="_blank"><h4>Картинка</h4></Link>
            <div className="d-flex justify-content-between">
              <StarRating />
              <span>Reviews (48)</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6> Price</h6>
              <button type="text" className="button-card">
                Add To Cart
              </button>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
