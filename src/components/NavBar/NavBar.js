import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header className="header">
      <div className="header__log">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="header__photo" src={logo} alt="" />
        </Link>
        <p className="brand">CNC Tecnología</p>
      </div>
      <nav className="navBar">
        <ul className="navBar__list">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navBar__item">Inicio</li>
          </Link>
          <Link to="/category/Monitores" style={{ textDecoration: "none" }}>
            <li className="navBar__item">Monitores</li>
          </Link>
          <Link to="/category/Encoders" style={{ textDecoration: "none" }}>
            <li className="navBar__item">Encoders</li>
          </Link>
          <Link to="/category/Coolers" style={{ textDecoration: "none" }}>
            <li className="navBar__item">Coolers</li>
          </Link>
          <Link to="/category/Módulos" style={{ textDecoration: "none" }}>
            <li className="navBar__item">Módulos</li>
          </Link>
          <Link
            to="/category/Otros repuestos"
            style={{ textDecoration: "none" }}
          >
            <li className="navBar__item">Otros Repuestos</li>
          </Link>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
