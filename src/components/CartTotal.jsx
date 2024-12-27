import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import './../styles/CartTotal.css';

function CartTotal({ discount, updateDiscount, beforeDiscount, afterDiscount }) {
  return (
    <div className="cart-total">
      <div className='cart-total-sub'>
        <label htmlFor="discount">Discount(%)</label>
        <input 
          type="number" 
          id="discount" 
          min="0" 
          max="100" 
          value={discount}
          onChange={updateDiscount} 
        />
      </div>
      <div className='pricing'>
       <div className='pricing-div'> <p>Total: {formatCurrency(beforeDiscount)}</p>
       <p>- Discount: {formatCurrency(discount)}</p></div>
        {/* <p>After Discount: {formatCurrency(afterDiscount)}</p> */}
        <hr />
        <p>Net Total: {formatCurrency(afterDiscount - discount)}</p>
      </div>
    </div>
  );
}

export default CartTotal;
