import React from 'react';
import ButtonLink from '../../components/ButtonLink';

import './Error.css';

function Error () {
  return (
    <div className="NotFind">
      <ButtonLink className="link-error" text={'Go Back'} to={'/home'} />
      <div class="error-img">
        <img src="/learnreact/images/404-opt.png" alt="" />
      </div>
    </div>
  );
}

export default Error;
