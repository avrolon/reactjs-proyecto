import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    const newCart = [...cartList];
    let index = newCart.findIndex((prod) => prod.id === id);
    newCart.splice(index, 1);

    updateCart([...newCart]);
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
  return (
    <cartContext.Provider
      value={{
        cartList,
        addCart,
        clearItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
