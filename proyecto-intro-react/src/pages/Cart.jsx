import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { user } = useUser(); 
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.img} alt={item.name} width="60" />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price * item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.name)}>-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.name)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <div className="cart-total-container">
        <h3 className="cart-total">Total: ${total}</h3>
      </div>
      <button
        className="pagar-button"
        disabled={!user} 
        style={{ backgroundColor: !user ? "gray" : "green", cursor: !user ? "not-allowed" : "pointer" }}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
