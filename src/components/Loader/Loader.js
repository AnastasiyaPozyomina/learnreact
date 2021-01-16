import React from 'react';
import './Loader.css';

export const Loader = () => (
  <div className="spinner spinner-border text-danger" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
