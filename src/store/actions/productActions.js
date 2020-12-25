import {FETCH_PRODUCTS} from '../types';

export function fetchProducts () {
  return async dispatch => {
    const response = await fetch (
      'https://jsonplaceholder.typicode.com/posts?_limit=8'
    );
    const json = await response.json ();
    dispatch ({
      type: FETCH_PRODUCTS,
      payload: json,
    });
  };
}
