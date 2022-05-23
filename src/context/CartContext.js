import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addCart(item) {
    setCartList([...cartList, item]);
  }
  function clearCart() {
    setCartList([]);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
