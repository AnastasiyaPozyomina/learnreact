import React from 'react';
import ImageGridList from '../../components/imageGridList/ImageGridList';
import './Blog.css';




  export default class Blog extends React.Component {
    render() {
        return ( 
            <div>
            <h1>Блог</h1>
            <ImageGridList />
            </div>
        );
    }
    }


 