import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

function ItemCount({ id, stock, initial, onAdd }) {
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
      <p>Unidades: {count}</p>
      <button className="itemCount__lessBtnAdd" onClick={add}>
        Agregar
      </button>
      <button className="itemCount__lessBtnRest" onClick={rest}>
        Quitar
      </button>
      <br />
      <Link to={`/itemDetail/${id}`}>
        <button className="itemCount__addToCartBtn" onClick={addCart}>
          <i class="bi bi-cart3"></i>
        </button>
      </Link>
    </div>
  );
}

export default ItemCount;
