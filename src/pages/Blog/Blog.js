
import React from 'react';
import FetchedPosts from '../../components/FetchedPosts/FetchedPosts';
import MainContent from '../../components/MainContent/MainContent';
import './Blog.css';
import Footer from "../../components/Footer/Footer";

export default () => {
  return (
    <>
      <MainContent
        title={'Blog'}
        className={'page-heading blog-heading header-text'}
      />
      <div className="container">
        <div className="row">
         <div className="blog col-md-12">
            <FetchedPosts />
         </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
