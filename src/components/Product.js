import React from 'react';
import { formatNumber as format } from './Tools';

export default function Product ({ product, editProduct, removeProduct }) {
  return (
  <div className="product">
    <div className="product-name">{product.name}</div>
    <div className="product-price">{format(product.price)} $</div>
    <div className="product-buttons">
      <button onClick={() => editProduct(product.id)}>Edit</button>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  </div>
  )
};

