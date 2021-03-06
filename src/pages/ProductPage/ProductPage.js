import React from 'react';
import './ProductPage.css';
import StarRating from '../../components/Rating/StarRating';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {Loader} from '../../components/Loader/Loader';

export default function ProductPage () {
  const {productId} = useParams ();
  const loading = useSelector (state => state.app.loading);
  const product = useSelector (state =>
    state.products.fetchedProducts.find (product => product._id == productId)
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="card-product">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="image-postpage"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="col-md-6 about-product">
            <h2> {product.title}</h2>
            <h6 className="price">{product.price}$</h6>
            <StarRating stars={product.star} />
            <p>{product.description}</p>
            <Button text={'ADD TO CART'} />
            <div className="row mt-3">
              <div className="col-md-6">
                <img
                  className="image-postpage"
                  src={product.image2}
                  alt={product.title}
                />
              </div>
              <div className="col-md-6">
                <img
                  className="image-postpage"
                  src={product.image3}
                  alt={product.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
