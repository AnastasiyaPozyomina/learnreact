import React from 'react';
import {Link, Route} from 'react-router-dom';
import './Post.css';
import PostPage from './PostPage';
import './PostPage.css';

export default ({post}) => {
  return (
    <div className="card">
      <div className="card-body">
        {post.id}
        <h5 className="card-title">{post.title}</h5>
      </div>
      <Link className="button-card"  to={`/posts/${post.id}`}>Read more</Link>
    </div>
  );
};





