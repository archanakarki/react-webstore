import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const Product = ({ product }) => {
  return <p>{product.name}</p>;
};
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/')
      .then(res => {
        console.log('Products', res.data);
        setProducts(res.data);
      })
      .catch(err =>
        console.log('Error while fetching data from server : ', err)
      );
  }, []);

  console.log('render ', products.length, 'notes');
  return (
    <>
      <div>
        {products.map(product => <Product key={product.id} product={product} /> )}
      </div>
    </>
  );
};

export default App;
