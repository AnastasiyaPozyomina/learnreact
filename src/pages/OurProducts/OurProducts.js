import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import FetchedProducts from '../../components/FetchedProducts/FetchedProducts';
import Footer from '../../components/Footer/Footer';

export default function OurProducts () {
  return (
    <>
      <MainContent
        title={'SIXTEEN PRODUCTS'}
        subtitle={'NEW ARRIVALS'}
        className={'page-heading products-heading header-text'}
      />
      <FetchedProducts />
      <Footer />
    </>
  );
}
