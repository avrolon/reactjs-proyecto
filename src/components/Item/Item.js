import ItemCount from "../ItemCount/ItemCount";
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
      <ItemCount
        id={prod.id}
        stock={10}
        initial={1}
        onAdd={(count) =>
          console.log(`Agregaron ${count} unidad/es al carrito`)
        }
      />
    </div>
  );
}
export default Item;
