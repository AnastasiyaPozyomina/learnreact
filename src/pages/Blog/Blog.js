import React from "react";
import FetchedPosts from "../../components/Blog/FetchedPosts";
import MainContent from "../../components/MainContent/MainContent";
import "./Blog.css";

 class Blog extends React.Component {
  render() {
    return (
      <div>
      <MainContent
      title={'Blog'}
      className={'page-heading about-heading header-text'}
      />
      <FetchedPosts />
      </div>
    );
  }
}
export default Blog;