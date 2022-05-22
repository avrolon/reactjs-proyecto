import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import BuyBtn from "../BuyBtn/BuyBtn";

function ItemDetail({ item }) {
  const [inputType, setInputType] = useState("itemCount");
  const { addCart, cartList } = UseCartContext();

  function onAdd(count, name) {
    console.log(`Se agregaron ${count} unidades de ${name} al pedido`);
    addCart({ item, count });
  }
  function handleInputType() {
    setInputType("buyBtn");
  }
  console.log(cartList);
  return (
    <div className="itemDetail">
      <img className="itemDetail__photo" src={item.photo} alt="" />
      <div className="itemDetail__info">
        <h3 className="itemDetail__title">{item.name}</h3>
        <p className="itemDetail__details">{item.details}</p>
        <p className="itemDetail__price">{`Precio: US$ ${item.price}`}</p>
        {inputType === "itemCount" ? (
          <ItemCount
            item={item}
            initial={1}
            stock={10}
            onAdd={onAdd}
            handleInputType={handleInputType}
          />
        ) : (
          <BuyBtn />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
