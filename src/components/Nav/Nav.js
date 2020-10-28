import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
  state = {
    color: 'white',
  };

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState ({color: '#1e1e1e'});
    } else {
      this.setState ({color: '#fff'});
    }
  };

  componentDidMount () {
    window.addEventListener ('scroll', this.listenScrollEvent);
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <h2 style={{color: this.state.color}}>
              Sixteen <em>Clothing</em>
            </h2>
          </NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={{color: this.state.color}}
                  className="nav-link"
                >
                  Home<span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/our-products"
                  style={{color: this.state.color}}
                  className="nav-link"
                >
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={{color: this.state.color}}
                  className="nav-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{color: this.state.color}}
                  className="nav-link"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
