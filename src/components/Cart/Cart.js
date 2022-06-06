import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import "./Cart.css";

function Cart() {
  const { totalItems, orderId, createOrder } = UseCartContext();
  const [orderSent, setOrderSent] = useState(false);

  function sendOrder() {
    setOrderSent(true);
    createOrder();
  }

  if (!totalItems) {
    return (
      <div className="cart">
        {orderSent ? (
          <h1>
            El pedido nro: {orderId} ha sido registrado! A la brevedad nos
            pondremos en contacto! Gracias por su compra
          </h1>
        ) : (
          <h1 className="cart__msg">
            No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
          </h1>
        )}
        <Link to="/">
          <button className="itemCount__clearCartBtn">Volver al inicio</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <CartList sentOrder={sendOrder} />
    </div>
  );
}

export default Cart;
