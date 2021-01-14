import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';

function Post({post}) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <p className="card-date"> {post.date} </p>
          <h5 className="card-title">{post.title}</h5>
        </div>
        <Link className="filled-button" to={`/posts/${post.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Post;
