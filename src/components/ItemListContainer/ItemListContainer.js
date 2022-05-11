import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const products = [
  {
    id: 1,
    name: "Monitor A90L-0001-0092",
    price: 1000,
    img: "../../images/monitor.jpg",
  },
  {
    id: 2,
    name: "Monitor A90L-0001-0093",
    price: 1000,
    img: "../../images/monitor.jpg",
  },
  {
    id: 3,
    name: "Monitor A90L-0001-0094",
    price: 1000,
    img: "../../images/monitor.jpg",
  },
];

const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((answer) => setProducts(answer))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer__title" style={{ color: "#eccb00" }}>
        {greeting}
        {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
      </h1>
    </div>
  );
}

export default ItemListContainer;
