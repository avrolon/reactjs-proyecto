import cartIc from "./cartIc.svg";
import "./Cart.css";

function ImCart() {
  return (
    <div className="cart">
      <button className="cartBtn">
        {<img className="favCar" src={cartIc} alt="" />}
      </button>
    </div>
  );
}

export default ImCart;
