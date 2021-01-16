import React from 'react';
import {NavLink} from 'react-router-dom';

export default function ButtonLink (props) {
  return <NavLink  className={props.className} to={props.to}> {props.text} </NavLink>;
}
