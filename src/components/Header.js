import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header shadow-sm">
      <nav className="container navbar navbar-expand navbar-light">
        <NavLink className="navbar-brand fw-bold" to="/">ProductStore</NavLink>
        <div className="navbar-nav ms-auto gap-2">
          <NavLink className="nav-link" to="/" end>Home</NavLink>
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
