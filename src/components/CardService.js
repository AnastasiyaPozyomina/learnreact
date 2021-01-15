import React from 'react';
import ButtonLink from './ButtonLink';

export default function CardService (props) {
  return (
    <div className="col-md-4">
      <div className="service-item">
        <div className="icon">
          <i className="fa fa-gear" />
        </div> <div className="down-content">
          <h4> {props.title} </h4>
          <p> {props.description} </p>
          <ButtonLink className="filled-button" text={props.textbtn} to={'#'} />
        </div>
      </div>
    </div>
  );
}
