import React from "react";
import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import swal from "sweetalert";
import withReactContent from "sweetalert2-react-content";
import "./Form.css";
import { Footer } from "../Footer/Footer";

export const Form = () => {
  const db = getFirestore();
  const [userId, setUserId] = useState("");
  const { cartList } = UseCartContext();
  const MySwal = withReactContent(Swal);

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
    if (buyer.email === buyer.emailConfirm) {
      order.buyer = buyer;
      order.date = new Date();
      order.items = cartList.map((item) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const quantity = item.count;

        return { id, name, price, quantity };
      });
      console.log(order);
      order.total = total;

      const queryCollectionOrders = collection(db, "orders");

      setTimeout(() => {
        addDoc(queryCollectionOrders, order)
          .then((resp) => setUserId(resp.id))
          .catch((err) => console.log(err))
          .finally(
            swal({
              title:
                "Gracias por su compra " +
                buyer.name +
                "! A la brevedad nos pondremos en contacto 😀​",
              text: "Su número de orden es: " + userId,
              icon: "success",
            })
          );
      }, 1000);
    } else {
      swal({
        title:
          "Los datos ingresados son incorrectos " +
          buyer.name +
          "! Por favor vuelva a ingresarlos. ​",
        icon: "error",
      });
    }
  }

  return (
    <>
      <div className="cartInfo">
        <h2>
          Por favor, completá los siguientes datos para finalizar tu pedido:
        </h2>
        <form onSubmit={(e) => newOrder(e)} className="cartInfo__detail">
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
            type="email"
            placeholder="Confirme su email"
            name="emailConfirm"
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
      <Footer />
    </>
  );
};
