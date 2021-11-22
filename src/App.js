import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Coffees from './components/Coffees/Coffees';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Coffees />
      </main>
    </CartProvider>
  );
}

export default App;
