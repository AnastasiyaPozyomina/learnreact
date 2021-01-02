import React from 'react'
import './PostPage.css';


   function PostPage(post) {
  return (
    <div className="title">
      <h1>id:{post.id}</h1>
      <h2>title:{post.title}</h2>
    </div>
  );
}

export default PostPage;