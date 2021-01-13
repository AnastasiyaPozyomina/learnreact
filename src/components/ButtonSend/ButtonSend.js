import React from 'react';
import './ButtonSend.css';

export default  (props) => {
  return <button type="submit"  onClick={props.onClick} className="button"> {props.text} </button>;
}