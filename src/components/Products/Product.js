import React from 'react';
import {Link} from 'react-router-dom';
import formatCurrency from '../../util';
import StarRating from '../Rating/StarRating';
import './Product.css';



  const Product = (props) => {
  return (
    <li className="col-lg-3 col-md-3 pb-4"  >
      <Link to = {"product/:product"} className="product-item">
        <img src={props.image} alt={props.title} />
      </Link>
      <div className="down-content">
        <Link to={"product/:product"}><h4>{props.title}</h4></Link>
        <div className="d-flex justify-content-between">
          <StarRating stars={props.star} />
          <span>Reviews (48)</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h6> {props.price} $</h6>
          <button type="text" className="button-card">
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default Product;