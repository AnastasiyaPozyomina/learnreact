import React from 'react';
import data from '../../data.json';
import Product from '../Products/Product';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../store/actions/productActions';
import {Loader} from '../Loader/Loader';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';

export default () => {
  // const products = data.products;
  const dispatch = useDispatch ();
  const products = useSelector (state => state.products.fetchedProducts);
  const loading = useSelector (state => state.app.loading);
  const alert = useSelector (state => state.app.alert);

  const productsList =
    products &&
    products.map (product => (
      <Product
        key={product._id}
        product={product}
        title={product.title}
        image={product.image}
        price={product.price}
        star={product.star}
      />
    ));

  if (loading) {
    return <Loader />;
  }

  if (products.length < 10) {
    return (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="row grid">
                {productsList}
              </ul>
            </div>
            <div className="col-md-12">
              {alert && <Alert text={alert} />}
              <Button
                text={'LOAD MORE'}
                onClick={() => dispatch (fetchProducts ())}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="row grid">
              {productsList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
