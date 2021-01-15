import React from 'react';
import './App.css';
import './assets/css/templatemo-sixteen.css';
import './assets/css/fontawesome.css';
import Header from './components/Header/Header';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contacts/Contacts';
import About from './pages/About/About';
import OurProducts from './pages/OurProducts/OurProducts';
import Home from './pages/Home/Home';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Blog from './pages/Blog/Blog';
import ProductPage from './pages/ProductPage/ProductPage';
import PostPage from './pages/PostPage/PostPage';
import Error from './pages/404/Error';

export default function App () {
  return (
    <HashRouter basename="/learnreact">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/our-products" component={OurProducts} />
          <Route exact path="/products/:productId" component={ProductPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
          <Route path="/404" component={Error} />
        </Switch>
      </div>
    </HashRouter>
  );
}
