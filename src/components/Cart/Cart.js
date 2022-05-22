import { UseCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartList, clearCart } = UseCartContext();

  return (
    <div className="cart">
      <h2>Su pedido es el siguiente:</h2>
      {cartList.map((prod) => (
        <li className="itemCount__detail">
          Producto: {prod.item.name} - Cantidad: {prod.count}
        </li>
      ))}
      <button className="itemCount__clearCartBtn" onClick={clearCart}>
        Vaciar carrito
      </button>
      <button className="itemCount__finalCartBtn">Finalizar compra</button>
    </div>
  );
}

export default Cart;
