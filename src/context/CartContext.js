import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderId, setOrderId] = useState();

  function isInCart(id) {
    return cartList.some((prod) => prod.id === id);
  }

  function addCart(item) {
    if (isInCart(item.id)) {
      let i = cartList.findIndex((prod) => prod.id === item.id);
      const newCart = cartList;
      newCart[i].count += item.count;
      updateCart(newCart);
    } else {
      updateCart([...cartList, item]);
    }
  }

  const clearItem = (id) => {
    const newCart = cartList.filter((prod) => prod.id !== id);
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  function updateCart(arr) {
    setCartList(arr);
    setTotalPrice(
      arr
        .map((curr) => curr.count * curr.price)
        .reduce((acc, curr) => acc + curr, 0)
    );
    setTotalItems(
      arr.map((curr) => curr.count).reduce((acc, curr) => acc + curr, 0)
    );
  }

  function createOrder() {
    let order = {};

    order.buyer = {
      name: "Andrea",
      email: "andreavarolon@gmail.com",
      phone: "1130060908",
    };
    order.total = totalPrice;
    order.products = cartList.map((item) => {
      const id = item.id;
      const name = item.name;
      const count = item.count;
      const price = item.price * item.count;
      return { id, name, count, price };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => setOrderId(resp.id))
      .catch((err) => console.log(err));
    // .finally(() => clearCart());
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addCart,
        clearItem,
        clearCart,
        totalItems,
        totalPrice,
        orderId,
        createOrder,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
