import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    if (!id) {
      getDocs(queryCollection)
        .then((resp) =>
          resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
        .then((data) =>
          data.sort((a, b) => {
            if (a.category > b.category) {
              return 1;
            }
            if (a.category < b.category) {
              return -1;
            }
            return 0;
          })
        )
        .then((sorted) => setItems(sorted))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const queryCollectionFilter = query(
        queryCollection,
        where("category", "==", id)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div className="itemListContainer">
      {loading ? <Loading /> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
