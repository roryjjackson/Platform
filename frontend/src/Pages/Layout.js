import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import './NavbarScroll';
import { useState } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <nav className="navbar">
        <button className="navbar-toggle" onClick={toggle}>Button here</button>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="nav-item">
            <Link className="navbar-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/users/sign_in">SignInForm</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/users/log_out">LogOutForm</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/users/dashboard">Profile/User Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/users/dashboard/new">Profile Form</Link>
          </li>
        </ul>
      </nav> */}

<nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          My Site
        </Link>
        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/users/sign_in">SignInForm</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/users/log_out">LogOutForm</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/users/dashboard">Profile/User Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/users/dashboard/new">Profile Form</Link>
          </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
