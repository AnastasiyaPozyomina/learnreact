import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../store/actions/postActions';
import ButtonSend from '../ButtonSend/ButtonSend';
import {Loader} from '../Loader/Loader';
import Post from '../Post/Post';
import './FetchedPosts.css';

export default () => {
  const dispatch = useDispatch ();
  const posts = useSelector (state => state.posts.fetchedPosts);
  const loading = useSelector (state => state.app.loading);
  const postsList = posts.map (post => <Post post={post} key={post.id} />);

  if (loading) {
    return <Loader />;
  }

  if (posts.length < 8) {
    return (
      <div className="container">
        <div className="row posts">
          <div className="col-md-12" />
          {postsList}
        </div>
        <ButtonSend
          text={'LOAD MORE'}
          onClick={() => dispatch (fetchPosts ())}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row posts">
        <div className="col-md-12" />
        {postsList}
      </div>
    </div>
  );
};
