import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ item, stock, initial, onAdd, handleInputType }) {
  const [count, setCount] = useState(initial);

  function add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function rest() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function addCart() {
    onAdd(count, item.name);
    handleInputType();
  }

  return (
    <div className="itemCount">
      <p>Unidades: {count}</p>
      <button className="itemCount__lessBtnAdd" onClick={add}>
        Agregar
      </button>
      <button className="itemCount__lessBtnRest" onClick={rest}>
        Quitar
      </button>
      <br />
      <button className="itemCount__addToCartBtn" onClick={addCart}>
        <i class="bi bi-cart3"> Agregar al carrito</i>
      </button>
    </div>
  );
}

export default ItemCount;
