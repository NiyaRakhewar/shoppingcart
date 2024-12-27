import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import './../styles/Product.css';

function Product({ product, updateQuantity }) {
  return (
    <div className="product">
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{formatCurrency(product.price)}</p>
      </div>
      <div className="product-quantity">
        <input 
          type="number" 
          min="1" 
          value={product.quantity} 
          onChange={(e) => updateQuantity(product.id, e.target.value)} 
        />
      </div>
      <div className="product-total">
        <p>{formatCurrency(product.price * product.quantity)}</p>
      </div>
    </div>
  );
}

export default Product;
