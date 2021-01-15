import React from 'react';
import './Alert.css';

export default function Alert({text}) {
  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  );
}
