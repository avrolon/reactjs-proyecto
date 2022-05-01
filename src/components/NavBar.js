import logo from "../images/logo.png";
import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="header">
      {<img className="header__img" src={logo} alt="" />}
      <p className="brand">CNC Tecnología</p>
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
              Motores
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
