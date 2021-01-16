import React from 'react';
import {Rating} from '@material-ui/lab';

export default function StarRating (props) {
  return (
    <>
      <Rating
        name="half-rating-read"
        defaultValue={props.stars}
        precision={0.5}
        readOnly
      />
    </>
  );
}
