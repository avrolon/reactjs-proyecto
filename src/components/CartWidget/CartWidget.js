import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { cartList } = UseCartContext();
  const totalItems = cartList.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  return (
    <Link to="/cart" style={{ pointerEvents: !totalItems ? "none" : " " }}>
      <div
        className="cartWidget"
        style={{ opacity: !totalItems ? "0.2" : "1" }}
      >
        <span className="cartWidget__icon">
          <i class="bi bi-cart3"></i>
        </span>
        <span className="cartWidget__counter">{totalItems}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
