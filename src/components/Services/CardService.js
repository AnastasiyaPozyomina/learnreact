import React from 'react';

export default class CardService extends React.Component {
  render () {
    return (
      <div class="col-md-4">
        <div class="service-item">
          <div class="icon">
            <i class="fa fa-gear" />
          </div> <div class="down-content">
            <h4> {this.props.title} </h4>
            <p> {this.props.description} </p>
            <a href="#" class="filled-button"> {this.props.textbtn} </a>
          </div>
        </div>
      </div>
    );
  }
}
