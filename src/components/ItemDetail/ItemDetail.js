import "./ItemDetail.css";
function ItemDetail({ item }) {
  return (
    <div className="itemDetail">
      <img className="itemDetail__photo" src={item.photo} alt="" />
      <div className="itemDetail__info">
        <h3 className="itemDetail__title">{item.name}</h3>
        <p className="itemDetail__details">{item.details}</p>
        <p className="itemDetail__price">{`Precio: US$ ${item.price}`}</p>
        <button className="itemDetail__addBtn">
          <i class="bi bi-cart3"> Agregar al carrito</i>
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
