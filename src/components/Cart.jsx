import React from 'react';
import Product from './Product';
import CartTotal from './CartTotal';

function Cart({ cart, updateQuantity, discount, updateDiscount, beforeDiscount, afterDiscount }) {
  return (
    <div className="cart">
      {cart.map(product => (
        <Product 
          key={product.id}
          product={product}
          updateQuantity={updateQuantity}
        />
      ))}
      <CartTotal 
        discount={discount} 
        updateDiscount={updateDiscount} 
        beforeDiscount={beforeDiscount} 
        afterDiscount={afterDiscount}
      />
    </div>
  );
}

export default Cart;
