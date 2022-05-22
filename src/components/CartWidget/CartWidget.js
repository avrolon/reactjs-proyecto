import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
  return (
    <Link to="/cart">
      <div className="cartWidget">
        <span className="cartWidget__icon">
          <i class="bi bi-cart3"></i>
        </span>
        <span className="cartWidget__counter">0</span>
      </div>
    </Link>
  );
}

export default CartWidget;
