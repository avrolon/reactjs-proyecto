import { Link } from "react-router-dom";
import "./BuyBtn.css";

function BuyBtn() {
  return (
    <div className="buyBtn">
      <Link to="/cart">
        <button className="buyBtn__goCart">Ver pedido</button>
      </Link>
      <Link to="/">
        <button className="buyButtons__goMenu">Seguir comprando</button>
      </Link>
    </div>
  );
}

export default BuyBtn;
