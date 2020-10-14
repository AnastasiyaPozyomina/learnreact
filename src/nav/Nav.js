import React from 'react';
import '../nav/Nav.css';


class Nav extends React.Component {
    render() {
        let nav = {
            "main": '/index',
            "about": '/about',
            "price": '/buy/price'
        }
        return ( 
        <nav >
            <ul className="nav justify-content-end">
            {Object.keys(nav).map(elem => {
            return <li className="nav-item nav-link text-primary"> {elem} </li>;
        })}
            </ul>
        </nav>
        );
    }
}

export default Nav;