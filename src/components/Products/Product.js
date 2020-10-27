import React from 'react';
import formatCurrency from '../../util';
import StarRating from '../Rating/StarRating';


export default class Product extends React.Component {
  render () {
    return (
      <ul className="row grid">
        {this.props.products.map (product => (
          <li className="col-lg-3 col-md-3" key={product._id}>
            <a className="product-item" href={'#' + product._id}>
              <img src={product.image} alt={product.title} />
              <div className="down-content">
                <h4>{product.title}</h4>
                <div className="d-flex justify-content-between">
                  <StarRating />
                  <span>Reviews (48)</span>
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <h6> {formatCurrency(product.price)}</h6>  
                <button type="text" className="button-card">Add To Cart</button>
                </div>
                
              </div>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
