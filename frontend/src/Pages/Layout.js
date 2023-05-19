import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import './NavbarScroll';
import { useState } from 'react';
import LogOutForm from '../Authentication/LogOutForm/LogOutForm'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const isLoggedIn = localStorage.getItem("authToken") !== null;

  return (
    <>
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
            <Link onClick={toggleNav} className="nav-link" to="/">Contact</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/contact">Contact</Link>
          </li>
          {/* <li className="nav-item">
            <Link onClick={toggleNav} className="nav-link" to="/users/sign_in">Login</Link>
          </li> */}
          {isLoggedIn ? (
              <>
              <li className="nav-item">
                <Link onClick={toggleNav} className="nav-link" to="/users/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <LogOutForm onClick={toggleNav} className='nav-link'/>
              </li>
              {/* <li className="nav-item">
                <Link onClick={toggleNav} className="nav-link" to="/users/get_current">Current user</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link onClick={toggleNav} className="nav-link" to="/users/dashboard/new">Profile Form</Link>
              </li> */}
            </>
               ) : (
                <>
                  <li className="nav-item">
                  <button className='button' >
                    <Link onClick={toggleNav} className="nav-link" to="/users/sign_in">Login</Link>
                  </button>
                  </li>
                </>
              )}
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  )
};

export default Layout;
