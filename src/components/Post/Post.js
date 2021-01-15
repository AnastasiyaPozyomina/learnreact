import React from 'react';
import ButtonLink from '../ButtonLink';
import './Post.css';

function Post({post}) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <p className="card-date"> {post.date} </p>
          <h5 className="card-title">{post.title}</h5>
        </div>
        <ButtonLink
          className="filled-button"
          text={'Read more'}
          to={`/posts/${post.id}`}
        />
      </div>
    </div>
  );
}

export default Post;
