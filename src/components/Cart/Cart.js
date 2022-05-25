import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { cartList, clearCart } = UseCartContext();

  return (
    <div className="cart">
      <h2>Tu carrito de compras:</h2>
      {cartList.map((prod) => (
        <CartItem key={prod.id} item={prod} />
      ))}
      {cartList.length ? (
        <button className="itemCount__clearCartBtn" onClick={clearCart}>
          Vaciar Carrito
        </button>
      ) : (
        <p className="cart__msg">
          No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
        </p>
      )}
      <Link to="/">
        <button className="itemCount__clearCartBtn">Volver al inicio</button>
      </Link>
    </div>
  );
}

export default Cart;
