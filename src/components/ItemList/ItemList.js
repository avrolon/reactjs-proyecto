import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ products }) {
  return (
    <div className="itemList">
      {products.map((prod) => (
        <Item
          key={prod.id}
          name={prod.name}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </div>
  );
}

export default ItemList;
