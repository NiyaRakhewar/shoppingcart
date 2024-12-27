import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';

const productList = [
  { id: 1, name: 'Product A', price: 50, quantity: 1 },
  { id: 2, name: 'Product B', price: 30, quantity: 1 },
  { id: 3, name: 'Product C', price: 10, quantity: 1 },
  { id: 4, name: 'Product D', price: 40, quantity: 1 },
  { id: 5, name: 'Product E', price: 60, quantity: 1 },
  { id: 6, name: 'Product F', price: 90, quantity: 1 },
];

function App() {
  const [cart, setCart] = useState(productList);
  const [discount, setDiscount] = useState(0);
  const [beforeDiscount, setBeforeDiscount] = useState(0);
  const [afterDiscount, setAfterDiscount] = useState(0);

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(product => 
      product.id === id ? { ...product, quantity: parseInt(quantity) } : product
    ));
  };

  const updateDiscount = (e) => {
    if(0 <= e.target.value && e.target.value <= 100) {
      setDiscount(e.target.value);

    }else{
      alert('Discount must be between 0 and 100');
    }
  };



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
      const discountAmount = (discount / 100) * subtotal;
      setBeforeDiscount(subtotal);
      setAfterDiscount(subtotal - discountAmount);
    };
    calculateTotals();
  }, [cart, discount]); 

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Cart 
        cart={cart}
        updateQuantity={updateQuantity}
        discount={discount}
        updateDiscount={updateDiscount}
        beforeDiscount={beforeDiscount}
        afterDiscount={afterDiscount}
      />
    </div>
  );
}

export default App;
