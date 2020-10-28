import React from 'react';
import { Rating } from '@material-ui/lab';

export default class StarRating extends React.Component {
  render () {
    return (
      <div>
          <Rating name="half-rating-read" defaultValue={this.props.stars} precision={0.5} readOnly />  
      </div>
                 
    )                 
  }
}