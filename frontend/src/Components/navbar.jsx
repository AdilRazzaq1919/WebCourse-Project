import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const navigate=useNavigate();
  const check = () => {
    if (localStorage.getItem('token') === null) {
      return true;
    } else {
      return false;
    }
  };
  const clear=()=>{
    localStorage.clear();
    navigate('/Login')
  }
  return (
    <header className="header">
      <Link to="/" className="logo">Out<span>fi</span>tt<span>e</span>rs</Link>
      {check() ? (
        <ul className="navlist">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/AdminUser">Admin</Link>
          </li>
          <li>
            <Link to="/SellerUser">Seller</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Register</Link>
          </li>
        </ul>
      ) : (
        <ul className="navlist">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/AdminUser">Admin</Link>
          </li>
          <li>
            <Link to="/SellerUser">Seller</Link>
          </li>
          <li>
            <button type="button" class="btn btn-dark " onClick={clear}>Logout</button>
          </li>
        </ul>
      )}
      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
};

export default Navbar;
