function ItemListContainer({ greeting }) {
  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer__title" style={{ color: "#ffc107" }}>
        {greeting}
      </h1>
    </div>
  );
}

export default ItemListContainer;
