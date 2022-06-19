import { UseCartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { clearItem } = UseCartContext();

  function removeItem() {
    clearItem(item.id);
  }

  return (
    <li className="itemCount__detail">
      <li>Producto: {item.name}</li>
      <li>Cantidad: {item.count}</li>
      <li>Precio por unidad: US$ {item.price} </li>
      <button onClick={removeItem} className="itemCount__clearCartBtn">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </li>
  );
}

export default CartItem;
