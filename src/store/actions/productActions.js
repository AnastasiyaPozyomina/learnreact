import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from '../types';
import {showLoader, hideLoader, showAlert, hideAlert} from './appActions';

export function fetchProducts () {
  return async dispatch => {
    try {
      dispatch (showLoader ());
      const response = await fetch (
        'https://my-json-server.typicode.com/AnastasiyaPozyomina/fakerestapi/products'
      );
      const json = await response.json ();
      setTimeout (() => {
        dispatch ({type: FETCH_PRODUCTS, payload: json});
        dispatch (hideLoader ());
      }, 500);
    } catch (e) {
      dispatch (showAlert ('Что-то пошло не так!'));
      dispatch (hideLoader ());
    }
  };
}

// export const fetchProducts = () => async dispatch => {
//   const res = await fetch ('/api/products');
//   dispatch ({
//     type: FETCH_PRODUCTS,
//     payload: res.data,
//   });
// };

export const filterProducts = (products, size) => dispatch => {
  dispatch ({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items: size === ''
        ? products
        : products.filter (x => x.availableSize.indexof (size) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => dispatch => {
  const sortedProducts = filteredProducts.slice ();
  if (sort === '') {
    sortProducts.sort ((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortProducts.sort (
      (a, b) =>
        sort === 'lowestprice'
          ? a.price > b.price ? 1 : -1
          : a.price > b.price ? -1 : 1
    );
  }
  dispatch ({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
