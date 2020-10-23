import React from 'react';

  export default class SocialIcons extends React.Component {
     
    render() {

        return (
            <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-behance"></i></a></li>
          </ul>
        )
        
    }
}

