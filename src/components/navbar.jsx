import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                ShoppingCart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <span className="btn btn-primary pe-none m-3 btn-sm">
            <i style={{ color: "white" }} className="fas fa-cart-plus m-1"></i>
            {props.productsCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
