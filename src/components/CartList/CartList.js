import { UseCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

function CartList(sendOrder) {
  const { cartList, clearCart, totalItems, totalPrice } = UseCartContext();

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
      <div className="cart__Information">
        <form>
          <h2>
            Por favor, completá los siguientes datos para finalizar la compra:
          </h2>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="text" placeholder="Localidad" />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Nro. teléfono" required />
          <button onClick={() => sendOrder} className="cart__finish">
            Finalizar pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartList;
