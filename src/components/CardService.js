import React from 'react';
import Link from './Button/Button';

export default function CardService (props) {
  return (
    <div className="col-md-4">
      <div className="service-item">
        <div className="icon">
          <i className="fa fa-gear" />
        </div> <div className="down-content">
          <h4> {props.title} </h4>
          <p> {props.description} </p>
          <Link text={props.textbtn} />
        </div>
      </div>
    </div>
  );
}
