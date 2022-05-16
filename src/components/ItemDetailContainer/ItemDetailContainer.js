import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setitem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/data.json")
        .then((response) => response.json())
        .then((itemsList) => itemsList.find((prod) => prod.id === id))
        .then((data) => setitem(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}
    </div>
  );
}
export default ItemDetailContainer;
