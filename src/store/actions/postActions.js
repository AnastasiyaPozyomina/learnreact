import {FETCH_POSTS} from '../types';
import {showLoader, hideLoader, showAlert} from './appActions';

export function fetchPosts () {
  return async dispatch => {
    try {
      dispatch (showLoader ());
      const response = await fetch (
        'https://jsonplaceholder.typicode.com/posts?_limit=12'
      );
      const json = await response.json ();
      setTimeout (() => {
        dispatch ({type: FETCH_POSTS, payload: json});
        dispatch (hideLoader ());
      }, 500);
    } catch (e) {
      dispatch (showAlert ('Error! Something went wrong!'));
      dispatch (hideLoader ());
    }
  };
}
