import React, { useState } from "react";
import itemImg from "../../images/monitor.jpg";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
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
    onAdd(count);
  }

  return (
    <div className="itemCount">
      <img className="itemCount__img" src={itemImg} alt="" />
      <div className="itemCount__descrip">
        <h2 className="itemCount__tit">Monitor A90L-0001-0092</h2>
        <p>Ver detalle</p>
        <p>Unidades: {count}</p>
        <button className="itemCount__lessBtnAdd" onClick={add}>
          Agregar
        </button>
        <button className="itemCount__lessBtnRest" onClick={rest}>
          Quitar
        </button>
        <button className="itemCount__lessBtnCart" onClick={addCart}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
