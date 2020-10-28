import React from 'react';

export default class SocialIcons extends React.Component {
  render () {
    return (
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-behance" />
          </a>
        </li>
      </ul>
    );
  }
}
