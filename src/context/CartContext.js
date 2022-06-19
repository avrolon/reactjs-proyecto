import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function isInCart(id) {
    return cartList.some((prod) => prod.id === id);
  }

  function addCart(item) {
    if (isInCart(item.id)) {
      let index = cartList.findIndex((prod) => prod.id === item.id);
      const newCartList = cartList;
      newCartList[index].count += item.count;
      setCartList(newCartList);
    } else {
      setCartList([...cartList, item]);
    }
  }

  const clearItem = (id) => {
    const newCart = [...cartList];
    let index = newCart.findIndex((prod) => prod.id === id);
    newCart.splice(index, 1);

    setCartList([...newCart]);
  };

  const clearCart = () => {
    setCartList([]);
  };
  return (
    <cartContext.Provider
      value={{
        cartList,
        addCart,
        clearItem,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
