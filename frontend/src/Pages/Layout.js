import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import './NavbarScroll';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/blogs">Blogs</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/users/sign_in">SignInForm</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/users/log_out">LogOutForm</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/users/dashboard">Profile/User Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/users/dashboard/new">Profile Form</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
