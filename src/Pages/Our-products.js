import React from 'react';
import MainContent from '../components/main_content/main_content';
import Products from '../components/products/products';



export default class OurProducts extends React.Component {
  render () {
    return (
      <div>
       <MainContent h2={"SIXTEEN PRODUCTS"} h4={"NEW ARRIVALS"} className={"page-heading products-heading header-text"} />
		   <Products />
      </div>
		
	)
  }
}
