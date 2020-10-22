import React from 'react';
import './App.css';
import '../assets/css/templatemo-sixteen.css';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Contact from '../Pages/Contacts/Contacts';
import About from '../Pages/About/About';
import OurProducts from '../Pages/Our-products';
import Home from '../Pages/Home/Home';





export default class App extends React.Component {
  render () {
  
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route  path="/home" component={Home} />
          <Route
           
            path="/our-products"
            component={OurProducts}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/" to="/home" />
        </Switch>

      </div>
      </Router>
    );
  }
}

