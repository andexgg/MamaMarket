"use client";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";
import Header from "./components/Header";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  return (
    <>
      <Header onCartClick={() => setShowCart(true)} />
      <main className="container">
        <div className="banner">
          🚚 Orders worth <strong>$2,500+</strong> are delivered free to your door anywhere in the US
        </div>
        <ProductGrid addToCart={addToCart} />
        {showCart && (
          <CartModal cart={cart} onClose={() => setShowCart(false)} />
        )}
      </main>
    </>
  );
}
