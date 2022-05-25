import { UseCartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { clearItem } = UseCartContext();

  function removeItem() {
    clearItem(item.id);
  }
  return (
    <li className="itemCount__detail">
      Producto: {item.name} <i class="bi bi-chevron-right"></i> Cantidad:{" "}
      {item.count} <i class="bi bi-chevron-right"></i> Precio por unidad: US${" "}
      {item.price}{" "}
      <button
        onClick={() => removeItem(item.id)}
        className="itemCount__clearCartBtn"
      >
        <i class="bi bi-trash3-fill"></i>
      </button>
    </li>
  );
}

export default CartItem;
