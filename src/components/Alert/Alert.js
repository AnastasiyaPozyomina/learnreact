import React from 'react';
import './Alert.css';

export  const Alert = ({text}) => (
  <div className="alert alert-danger" role="alert">
    {text}
  </div>
);
