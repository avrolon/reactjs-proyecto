import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { cartList, clearCart, totalItems, totalPrice } = UseCartContext();
  if (!totalItems) {
    return (
      <div className="cart">
        <p className="cart__msg">
          No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
        </p>
        <Link to="/">
          <button className="itemCount__clearCartBtn">Volver al inicio</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Tu carrito de compras:</h2>
      {cartList.map((prod) => (
        <CartItem key={prod.id} item={prod} />
      ))}
      <p className="cart__count">{`Cantidad de unidades: ${totalItems}`}</p>
      <p className="cart__price">{`Total: US$${totalPrice}`}</p>
      {cartList.length ? (
        <button className="itemCount__clearCartBtn" onClick={clearCart}>
          Vaciar Carrito
        </button>
      ) : (
        <p className="cart__msg">
          No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
        </p>
      )}
      <button className="cart__finish">Finalizar compra</button>
    </div>
  );
}

export default Cart;
