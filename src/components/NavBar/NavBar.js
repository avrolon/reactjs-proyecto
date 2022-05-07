import logo from "../../images/logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header className="header">
      <div className="header__log">
        <img className="header__img" src={logo} alt="" />
        <p className="brand">CNC Tecnología</p>
      </div>
      <nav className="navBar">
        <ul className="navBar__list">
          <li className="navBar__item">
            <a className="navBar__link" href="#">
              Monitores
            </a>
          </li>
          <li className="navBar__item">
            <a className="navBar__link" href="#">
              Encoders
            </a>
          </li>
          <li className="navBar__item">
            <a className="navBar__link" href="#">
              Coolers
            </a>
          </li>
          <li className="navBar__item">
            <a className="navBar__link" href="#">
              Módulos
            </a>
          </li>
          <li className="navBar__item">
            <a className="navBar__link" href="#">
              Otros repuestos
            </a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
