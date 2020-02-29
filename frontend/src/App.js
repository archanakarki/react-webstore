import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import AddToCartButton from './components/AddToCartButton';
import AddToWishListButton from './AddToWishListButton';

const App = () => {

  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState(0);
  const [productsInWishList, setProductsInWishList] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:3001/')
      .then(res => {
        console.log('Products => ', res.data);
        setProducts(res.data);
      })
      .catch(err =>
        console.log('Error while fetching data from server : ', err)
      );
  }, []);

  const addToCart = () => setProductsInCart(productsInCart + 1)
  const addToWishList = () => setProductsInWishList(productsInWishList + 1)


  return (
    <div className="App">
      <h1 className="App-total-price">Total price : <span>{totalPrice}</span></h1>
      <h4>In Cart : <span className="App-products-in-cart">{productsInCart}</span> {productsInCart>1 ? 'products' : 'product' }</h4>
      <h4>In Wishlist : <span className="App-products-in-wishlist">{productsInWishList}</span> {productsInWishList>1 ? 'products' : 'product' }</h4>
      
      {products.map(product => (
        <>
          <Product key={product.id} product={product} />
          <AddToCartButton onClick={addToCart}/>
          <AddToWishListButton onClick={addToWishList}/>
        </>
      ))}


    
    </div>
  );
};

export default App;
