import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

export default class FindUs extends React.Component {
  render() {
    return (
      <div class="find-us">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div class="col-md-8">
              <div id="map">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-md-4">
              <div class="left-content">
                <h4>About our office</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu
                  consectetur.Lorem ipsum dolor sit amet, consectetur adipisic
                  elit. Et, consequuntur, modi mollitia corporis ipsa voluptate
                  corrupti.
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
