import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../store/actions/postActions';
import Button from '../Button/Button';
import {Loader} from '../Loader/Loader';
import Post from '../Post/Post';
import './FetchedPosts.css';
import Alert from '../Alert/Alert';

export default () => {
  const dispatch = useDispatch ();
  const posts = useSelector (state => state.posts.fetchedPosts);
  const loading = useSelector (state => state.app.loading);
  const alert = useSelector (state => state.app.alert);
  const postsList = posts.map (post => <Post post={post} key={post.id} />);

  if (loading) {
    return <Loader />;
  }

  if (posts.length < 8) {
    return (
      <div className="container">
        <div className="row posts">
          <div className="col-md-12">
            <div className="row grid">
              {postsList}
            </div>
            {alert && <Alert text={alert} />}
            <Button
              text={'LOAD MORE'}
              onClick={() => dispatch (fetchPosts ())}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row posts">
        <div className="col-md-12">
          <div className="row grid">
            {postsList}
          </div>
        </div>
      </div>
    </div>
  );
};
