import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { Form } from "../Form/Form";

export const Cart = () => {
  const { cartList, clearCart } = UseCartContext();

  const total = cartList.reduce(
    (acc, item) => (acc = acc + item.price * item.count),
    0
  );

  return (
    <>
      <div className="cart">
        <h2>Tu carrito:</h2>

        {cartList.map((prod) => (
          <CartItem key={prod.id} item={prod} />
        ))}

        {cartList.length ? (
          <>
            <div>
              <p className="cart__price">{`Total pedido: US$${total}`}</p>
            </div>
            <button className="itemCount__clearCartBtn" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Form />
          </>
        ) : (
          <div className="cart">
            <h2 className="cart__msg">
              No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
            </h2>
            <Link to="/">
              <button className="itemCount__clearCartBtn">
                Volver al inicio
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
