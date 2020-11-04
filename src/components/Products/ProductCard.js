import React, {Component} from 'react';
import './List.css';


export default class ProductCard extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>{this.props.title}</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  voluptate nihil eum consectetur similique? Consectetur, quod,
                  incidunt, harum nisi dolores delectus reprehenderit voluptatem
                  perferendis dicta dolorem non blanditiis ex fugiat. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  eum ratione ex ea praesentium quibusdam? Aut, in eum facere
                  corrupti necessitatibus perspiciatis quis.
                </p>
            
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

