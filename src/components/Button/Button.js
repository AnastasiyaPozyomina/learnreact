import React from 'react';

export default class Button extends React.Component {
  render () {
    return <a href="#" className="filled-button"> {this.props.text} </a>;
  }
}
