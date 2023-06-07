import React from "react";
import { Link } from 'react-router-dom';
import '../Admin/style.css'
const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Out<span>fi</span>tt<span>e</span>rs</Link>
      <ul className="navlist">
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/AdminUser">Admin</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/SignUp">Register</Link>
        </li>
      </ul>
      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
};

export default Navbar;
