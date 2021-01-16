import React from 'react';
import ButtonLink from '../ButtonLink';

function AboutCompany (props) {
  return (
    <div className="best-features about-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
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
              <ButtonLink className="filled-button" text={'Read More'} to={'/about'} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="images/feature-image.jpg" alt="feature-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
