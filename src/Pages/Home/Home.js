import React from 'react';
import team04 from '../../assets/images/team_04.jpg';
import team05 from '../../assets/images/team_05.jpg';
import team06 from '../../assets/images/team_06.jpg';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';





export default class Home extends React.Component {
  render () {
    // const options = {
    //   items: 1,
    //   nav: true,
    //   rewind: true,
    //   autoplay: true,
    //   slideBy: 1,
    //   dots: true,
    //   dotsEach: true,
    //   dotData: true
    // };



    return (
      <div class="banner header-text">
      <div class="owl-banner owl-carousel owl-loaded owl-drag">
      <OwlCarousel items={1}  
      // className="owl-theme"  
      loop  
      margin={5}>
        <div class="banner-item-01">
          <div class="text-content">
            <h4>Best Offer</h4>
            <h2>New Arrivals On Sale</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h4>Last Minute</h4>
            <h2>Grab last minute deals</h2>
          </div>
        </div>
    </OwlCarousel>
    </div>
    </div>
	)
  }
}
