import cartIc from "./cartIc.svg";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart">
      <button className="cartBtn">
        <img className="favCar" src={cartIc} alt="" />
      </button>
    </div>
  );
}

export default CartWidget;
