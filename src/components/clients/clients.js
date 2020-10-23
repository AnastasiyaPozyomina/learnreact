import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import client01 from '../../assets/images/client-01.png';



  export default class Clients extends React.Component {
     
    render() {

        return (
          <div class="happy-clients">
       <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="section-heading">
              <h2>Happy Partners</h2>
            </div>
          </div>
          <div class="col-md-12">
          <div class="owl-clients owl-carousel owl-loaded owl-drag">
          <OwlCarousel items={5}  
          autoplay
          loop  
          margin={5}>
           <div class="client-item">
                <img src={client01} alt="1" />
              </div>
              
              <div class="client-item">
                <img src= {client01} alt="2" />
              </div>
              
              <div class="client-item">
                <img src={client01} alt="3"  />
              </div>
              
              <div class="client-item">
                <img src={client01} alt="4" />
              </div>
              
              <div class="client-item">
                <img src={client01} alt="5" />
              </div>
              
              <div class="client-item">
                <img src={client01} alt="6" />
              </div>

        </OwlCarousel>
        </div>
        </div>
       </div>
      </div>
    </div>
        )
        
    }
}

