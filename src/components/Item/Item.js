import { Link } from "react-router-dom";
import "./Item.css";

function Item({ prod }) {
  return (
    <div className="item">
      <img className="item__photo" src={prod.photo} alt="" />
      <div className="item__info">
        <p className="item__categ">{prod.category}</p>
        <h3 className="item__name">{prod.name}</h3>
        <p className="item__price">{`Precio: US$ ${prod.price}`}</p>
      </div>
      <Link to={`/itemDetail/${prod.id}`}>
        <button className="item__addBtn">Ver detalle</button>
      </Link>
    </div>
  );
}
export default Item;
