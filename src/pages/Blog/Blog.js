import { Pagination } from '@material-ui/lab';
import React from 'react';
import FetchedPosts from '../../components/Blog/FetchedPosts';
import MainContent from '../../components/MainContent/MainContent';
import './Blog.css';

export default () => {
  return (
    <div>
      <MainContent
        title={'Blog'}
        className={'page-heading about-heading header-text'}
      />
      <div className="container">
        <div className="row">
            <FetchedPosts />
        </div>
      </div>
    </div>
  );
};
