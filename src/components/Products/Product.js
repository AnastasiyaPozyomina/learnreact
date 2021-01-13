import React from 'react';
import {Link} from 'react-router-dom';
import formatCurrency from '../../util';
import StarRating from '../Rating/StarRating';
import './Product.css';

function Product({product}) {
  return (
    <li className="col-lg-3 col-md-3 pb-4">
      <Link to={`/products/${product._id}`} className="product-item">
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="down-content">
        <Link to={`/products/${product._id}`}><h4 className="product-title">{product.title}</h4></Link>
        <div className="d-flex justify-content-between">
          <StarRating stars={product.star} />
          <h6> ${product.price}</h6>
        </div>
        <div className="text-center mt-3">
          
          <Link className="filled-button" to={`/products/${product._id}`}>
            Read more
          </Link>

        </div>
      </div>
    </li>
  );
}

export default Product;
