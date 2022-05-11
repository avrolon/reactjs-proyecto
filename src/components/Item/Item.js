import itemImg from "../../images/monitor.jpg";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

function Item({ id, name, price, img }) {
  return (
    <div className="item">
      <img className="item__img" src={itemImg} alt="" />
      <div className="item__info">
        <h3 className="item__name">{name}</h3>
        <p className="item__price">{`Precio: usd ${price}`}</p>
        <ItemCount
          stock={10}
          initial={1}
          onAdd={(count) =>
            console.log(`Agregaron ${count} unidad/es al carrito`)
          }
        />
      </div>
    </div>
  );
}
export default Item;
