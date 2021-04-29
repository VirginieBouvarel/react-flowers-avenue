import '../styles/App.css';
import React from 'react';
import Banner from './Banner.js'
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import Footer from './Footer.js';
import logo from '../assets/logo.jfif'
import { useState, useEffect } from 'react'



function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(
    () => { localStorage.setItem('cart', JSON.stringify(cart)) },
    [cart]
  );

  return (
    <React.Fragment>
      <Banner>
        <img src={logo} alt='Flowers avenue' className="f-logo" />
        <h1 className="f-title">Flowers Avenue</h1>
      </Banner>
      <div className="main-content">
        <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <Footer />
    </React.Fragment>
  );
}



export default App;
