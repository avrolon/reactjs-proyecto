import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer__title" style={{ color: "#eccb00" }}>
        {greeting}
      </h1>
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(count) =>
          console.log(`Agregaron ${count} unidad/es al carrito`)
        }
      />
    </div>
  );
}

export default ItemListContainer;
