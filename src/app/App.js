import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import { Button } from 'react-bootstrap';


class App extends React.Component {
    render() {
        return ( 
            <div className = "App" >
            <Header />
            <Button variant="primary">Кнопкапше</Button>
            <Nav />
            <Main />
           
            <Footer />
            </div>
        );
    }
}

export default App;