import React from 'react';
import './App.css';
import './assets/css/templatemo-sixteen.css';
import './assets/css/fontawesome.css';
import Header from './components/Header/Header';
import {BrowserRouter, Router, Redirect, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contacts/Contacts';
import About from './pages/About/About';
import OurProducts from './pages/OurProducts/OurProducts';
import Home from './pages/Home/Home';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductsPage from './components/Products/ProductsPage';
import Product from './components/Products/Product';
import ProductPage from './components/Products/ProductPage';
import Blog from './pages/Blog/Blog';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/our-products" component={OurProducts} />
          <Route exact path="/products" component={ProductsPage} />
          <Route  path="/product/:product" component={ProductPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


