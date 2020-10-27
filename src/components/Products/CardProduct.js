import React from 'react';
import StarRating from '../Rating/StarRating';


export default class CardProduct extends React.Component {
  render () {
    return (
       <div className="col-lg-4 col-md-4 all">
                    <div className="product-item">
                      <a href="#">
                        <img src={this.props.img} alt="" />
                      </a>
                      <div className="down-content">
                        <a href="#">
                        <h4>{this.props.title}</h4>
                        </a>
                        <h6>${this.props. price}</h6>
                        <p>
                         {this.props.description}
                        </p>
                       <StarRating />
                        <span>Reviews (12)</span>
                      </div>
                    </div>
                  </div>
    );
  }
}