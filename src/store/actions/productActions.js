import {FETCH_PRODUCTS} from '../types';
import {showLoader, hideLoader, showAlert} from './appActions';

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
      dispatch (showAlert ('Error! Something went wrong!'));
      dispatch (hideLoader ());
    }
  };
}
