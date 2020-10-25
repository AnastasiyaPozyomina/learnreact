import React from 'react';
import Button from '../Button/Button';

export default class CardService extends React.Component {
  render () {
    return (
      <div className="col-md-4">
        <div className="service-item">
          <div className="icon">
            <i className="fa fa-gear" />
          </div> <div className="down-content">
            <h4> {this.props.title} </h4>
            <p> {this.props.description} </p>
            {/* <a href="#" class="filled-button"> {this.props.textbtn} </a> */}
            <Button 
             text = {this.props.textbtn}
            />
          </div>
        </div>
      </div>
    );
  }
}
