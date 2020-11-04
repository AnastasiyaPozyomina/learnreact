import React from 'react';
import './App.css';
import './assets/css/templatemo-sixteen.css';
import './assets/css/fontawesome.css';
import Header from './components/Header/Header';
import {
  BrowserRouter, Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Contact from './pages/Contacts/Contacts';
import About from './pages/About/About';
import OurProducts from './pages/OurProducts/OurProducts';
import Home from './pages/Home/Home';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './components/Products/ProductCard';

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route  path="/home" component={Home} />
            <Route exact path="/our-products" component={OurProducts} />
            <Route   path="/our-products/:id">
               <ProductCard /> 
            </Route> 
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}
