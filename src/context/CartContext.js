import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProvider({ children }) {
  const [cartList, SetCartList] = useState([]);

  function addCart(item) {
    SetCartList([...cartList, item]);
  }
  function clearCart() {
    SetCartList([]);
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
