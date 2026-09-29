import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="Nav">
      <Link className="brand" to="/">TIO TORTA</Link>
      <div className="nav__links">
        <Link to="/Menu">Menu</Link>
        <Link to="/Pedido">Pedido</Link>
        <Link to="/Contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Nav;