import React from 'react';
import './PostPage.css';

import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

function PostPage () {
  const {postId} = useParams ();
  const post = useSelector (state =>
    state.posts.fetchedPosts.find (posts => posts.id == postId)
  );

  return (
    <div className="container post-page">
      <div className="row">
        <div className="col-md-12">
          <p className="post-date">{post.date}</p>
          <h4 className="post-title">{post.title}</h4>
          <p className="post-body">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
