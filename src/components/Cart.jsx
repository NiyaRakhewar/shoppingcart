import React from 'react';
import Product from './Product';
import CartTotal from './CartTotal';
import "./../styles/Cart.css"
function Cart({ cart, updateQuantity, discount, updateDiscount, beforeDiscount, afterDiscount }) {
  return (
    <div className='cart-div'>
        <div className="cart">
      {cart.map(product => (
        <Product 
          key={product.id}
          product={product}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
<hr />
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
