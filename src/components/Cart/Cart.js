import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = () => {
  const [userId, setUserId] = useState("");
  const db = getFirestore();
  const { cartList, clearCart, totalItems } = UseCartContext();
  const total = cartList.reduce(
    (acc, item) => (acc = acc + parseFloat(item.price) * item.count),
    0
  );
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    city: "",
    email: "",
    phone: "",
  });

  function handleInputChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  function newOrder(e) {
    e.preventDefault();
    let order = {};

    order.buyer = buyer;
    order.items = cartList.map((item) => {
      const id = item.id;
      const name = item.name;
      const price = item.price;
      const count = item.count;

      return { id, name, price, count };
    });
    console.log(order);
    order.total = total;

    const queryCollectionOrders = collection(db, "orders");

    setTimeout(() => {
      addDoc(queryCollectionOrders, order)
        .then((resp) => setUserId(resp.id))
        .catch((err) => console.log(err));
      // .finally(clearCart())
    }, 2000);
  }
  return (
    <>
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
          <h2 className="cart__msg">
            No hay productos en tu carrito <i class="bi bi-emoji-frown"></i>
          </h2>
        )}

        {cartList.length ? (
          <>
            <div>
              {/* <p className="cart__count">{`Cantidad de unidades: ${totalItems}`}</p> */}
              <p className="cart__price">{`Total pedido: US$${total}`}</p>
            </div>

            <div className="cartInfo">
              <h2>
                Por favor, completá los siguientes datos para finalizar la
                compra:
              </h2>
              <form onSubmit={(e) => newOrder(e)}>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  name="surname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Localidad"
                  name="city"
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Telefono"
                  name="phone"
                  onChange={handleInputChange}
                />
                <button type="submit" className="cart__finish">
                  Finalizar pedido
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="cart">
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
