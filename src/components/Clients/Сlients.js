import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function Clients () {
  return (
    <div className="happy-clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Happy Partners</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-clients owl-carousel owl-loaded owl-drag">
              <OwlCarousel items={5} autoplay loop margin={5}>
                <div className="client-item">
                  <img src="images/client-01.png" alt="1" />
                </div>

                <div className="client-item">
                  <img src="images/client-01.png" alt="2" />
                </div>

                <div className="client-item">
                  <img src="images/client-01.png" alt="3" />
                </div>

                <div className="client-item">
                  <img src="images/client-01.png" alt="4" />
                </div>

                <div className="client-item">
                  <img src="images/client-01.png" alt="5" />
                </div>

                <div className="client-item">
                  <img src="images/client-01.png" alt="6" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
