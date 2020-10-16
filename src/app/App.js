import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Contacts from '../Pages/Contacts/Contacts';
import Navigation from '../nav/Nav';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar/PrimarySearchAppBar';




export default class App extends React.Component {
    render() {
        return ( 
          <React.Fragment>
     
      <div className = "App" >
            <Router>
      <div>
      <PrimarySearchAppBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
            </div>
            
    </React.Fragment>
           
        );
    }
}

