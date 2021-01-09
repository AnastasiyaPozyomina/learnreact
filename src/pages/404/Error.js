import React from 'react';
import {NavLink} from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className="NotFind">
      <NavLink className="link-error" to="/">Go Back</NavLink>
      <div class="error-img">
        <img src="/learnreact/images/404-opt.png" alt="" />
      </div>

    </div>
  );
};

export default Error;
