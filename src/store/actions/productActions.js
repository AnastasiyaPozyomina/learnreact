import {FETCH_PRODUCTS} from '../types';
import {showLoader, hideLoader, showAlert, hideAlert} from './appActions';

// export function fetchProducts () {
//   return async dispatch => {
//     try {
//       dispatch (showLoader ());
//       const response = await fetch (
//         'https://jsonplaceholder.typicode.com/posts?_limit=50'
//       );
//       const json = await response.json ();
//       setTimeout (() => {
//         dispatch ({type: FETCH_PRODUCTS payload: json});
//         dispatch (hideLoader ());
//       }, 500);
//     } catch (e) {
//       dispatch (showAlert ('Что-то пошло не так!'));
//       dispatch (hideLoader ());
//     }
//   };
// }

export const fetchProducts = () => async dispatch => {
  const res = await fetch ('/api/products');
  dispatch ({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};
