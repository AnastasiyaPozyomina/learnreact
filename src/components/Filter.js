import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterProducts, sortProducts} from '../store/actions/productActions';

export default function Filter(props) {
    return (
      <div className="filter d-flex justify-content-between">
        <div className="filter-result">{props.filteredProducts} Products</div>
        <div className="filter-soft">
          Order{""}
          <select value={props.sort} onChange={(e)=>props.sortProducts(props. filteredProducts, e.target.value)}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{""}
          <select value={props.size} onChange={(e)=>props.filterProducts(props. filteredProducts, e.target.value)}>
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }


// export default connect (
//   state => ({
//     size: state.products.size,
//     sort: state.products.sort,
//     products: state.products.fetchedProducts,
//     filteredProducts: state.products.filteredItems,
//   }),
//   {
//     filterProducts,
//     sortProducts,
//   }
// )(Filter);
