import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function Banner () {
  return (
    <div class="banner header-text">
      <div class="owl-banner owl-carousel owl-loaded owl-drag">
        <OwlCarousel items={1} autoplay loop margin={0}>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide_01.jpg'})`,
            }}
            class="banner-item-01"
          >
            <div class="text-content">
              <h4>Best Offer</h4>
              <h2>New Arrivals On Sale</h2>
            </div>
          </div>
          <div
            class="banner-item-02"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide_02.jpg'})`,
            }}
          >
            <div class="text-content">
              <h4>Flash Deals</h4>
              <h2>Get your best products</h2>
            </div>
          </div>
          <div
            class="banner-item-03"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide_03.jpg'})`,
            }}
          >
            <div class="text-content">
              <h4>Last Minute</h4>
              <h2>Grab last minute deals</h2>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
