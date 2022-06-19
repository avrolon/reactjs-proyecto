import { UseCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

function CartList() {
  const { cartList, clearCart, total, totalPrice } = UseCartContext();

  return (
    <div className="cart">
      <h2>Tu carrito de compras:</h2>
      {cartList.map((prod) => (
        <CartItem key={prod.id} item={prod} />
      ))}
      <p className="cart__count">{`Cantidad de unidades: ${total}`}</p>
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
    </div>
  );
}

export default CartList;
