import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import './PostPage.css';

function Post({post}) {
  return (
    <div className="card">
      <div className="card-body">
        {post.id}
        <h5 className="card-title">{post.title}</h5>
      </div>
      <Link
        className="button-card"
        to={{
          pathname: `/posts/${post.id}`,
        }}
      >
        Read more
      </Link>
    </div>
  );
}

export default Post;
