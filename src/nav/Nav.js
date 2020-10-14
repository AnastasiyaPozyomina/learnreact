import React from 'react';
// import logo from './logo.svg';
import './Nav.css';
import { Link,  HandleClick, Breadcrumbs }  from '@material-ui/core/';








export default class Navigation extends React.Component {
    render() {
        return ( 
          <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/">
    Home
  </Link>
  <Link color="inherit" href="/about">
    About
  </Link>
  <Link color="inherit" href="/blog">
   Blog
  </Link>
  <Link color="inherit" href="/contacts">
   Contact
  </Link>
</Breadcrumbs>
        )
    }
}
