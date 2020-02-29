import React from 'react';
// import AddToCartButton from './AddToCartButton'

const Product = ({ product }) => {
  return (
    <>
      <p>{product.name}</p>
      <p>{product.currencySymbol} {product.price}</p>
    </>
  );
};

export default Product;
