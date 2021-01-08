import React from 'react';
import Gallery from '../Gallery/Gallery';
import './Product.css';
import StarRating from '../Rating/StarRating';
import data from '../../data.json';

export default function ProductPage (product){
  return (
    <div className="card-product">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Gallery />
          </div>
          <div className="col-md-6 about-product">
            <h2>
            {product.title}
            </h2>
            <h6 className="price">{product.price}</h6>
            <StarRating />
            <p>Color: Blue Multi(BLMU)</p>
            <p>
              Rich florals and luscious velvet make an enchanting combo. This bodycon goes bold with a deep surplice styling in an eye-catching, artistic print. Slip into some glitzy stilettos and you're set to steal the show.
            </p>
            <button type="text" className="button-card">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
