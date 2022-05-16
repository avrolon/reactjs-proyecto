import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/data.json")
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  return (
    <div className="itemListContainer">
      {loading ? (
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <ItemList items={items} id={id} />
      )}
    </div>
  );
}

export default ItemListContainer;
