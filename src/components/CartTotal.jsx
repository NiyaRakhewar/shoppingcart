import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import './../styles/CartTotal.css';

function CartTotal({ discount, updateDiscount, beforeDiscount, afterDiscount }) {
  return (
    <div className="cart-total">
      <div>
        <label htmlFor="discount">Discount (%)</label>
        <input 
          type="number" 
          id="discount" 
          min="0" 
          max="100" 
          value={discount}
          onChange={updateDiscount} 
        />
      </div>
      <div>
        <p>Total: {formatCurrency(beforeDiscount)}</p>
        <p>Discount: {formatCurrency(discount)}</p>
        <p>After Discount: {formatCurrency(afterDiscount)}</p>
        <p>Net Total: {formatCurrency(afterDiscount - discount)}</p>
      </div>
    </div>
  );
}

export default CartTotal;
