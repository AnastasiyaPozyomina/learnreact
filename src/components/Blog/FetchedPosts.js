import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../store/actions/postActions';
import {Loader} from '../Loader';
import Post from './Post';

 export default  () => {
  const dispatch = useDispatch ();
  const posts = useSelector (state => state.posts.fetchedPosts);
  const loading = useSelector (state => state.app.loading);
  const postsList = posts.map (post => <Post post={post} key={post.id} />);

  if (loading) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
      className="filled-button"
      onClick={() => dispatch (fetchPosts ())}
    >
      LOAD MORE
    </button>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="filter filter-posts d-flex justify-content-between">
            <div className="filter-result"> Posts</div>
            <div className="filter-size">
              Filter
              <select>
                <option value="ALL">ALL</option>
                <option value="Date">Date</option>
                <option value="A">A-Z</option>
                <option value="Z">Z-A</option>
              </select>
            </div>
          </div>
        </div>
        {postsList}
      </div>
      <button
        className="filled-button"
        onClick={() => dispatch (fetchPosts ())}
      >
        LOAD MORE
      </button>
    </div>
  );
};
