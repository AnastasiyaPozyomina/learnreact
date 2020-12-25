import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {postsReducer} from './postsReducer';
import {productsReducer} from './productsReducer';

export const rootReducer = combineReducers ({
  posts: postsReducer,
  products: productsReducer,
  app: appReducer,
});
