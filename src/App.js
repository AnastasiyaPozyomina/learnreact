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
import Product from './components/Products/Product';
import Blog from './pages/Blog/Blog';
import Post from './components/Blog/Post';
import ProductPage from './components/Products/ProductPage';
import PostPage from './pages/PostPage/PostPage';



export default function App() {
  return (
    <BrowserRouter basename="/learnreact/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home/" component={Home} />
          <Route exact path="/our-products" component={OurProducts} />
          <Route exact path="/product/:_id" children={ProductPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/posts/:postId"  component={PostPage} />
          <Route exact path="/contact" component={Contact}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


