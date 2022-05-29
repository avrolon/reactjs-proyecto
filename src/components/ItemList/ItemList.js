import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ items }) {
  return (
    <div className="itemList">
      {items.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default ItemList;
