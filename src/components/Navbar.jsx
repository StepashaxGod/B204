import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import "../css/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CarContext } from "../context/CarContext";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems } = useContext(CarContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="navbar-container">
      <div className="left-side">
        <img src={assets.logo} alt="firm logo" />
      </div>

      <ul className="center-side">
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/add-product">
          <p>Add a product</p>
        </NavLink>
        <NavLink to="/orders">history</NavLink>
      </ul>

      <div className="right-side">
        <Link className="cart-link" to="/cart">
          <img className="img-cart" src={assets.cartIcon} alt="cart icon" />
          <p className="quantity-counter">
            {totalQuantity > 0 ? totalQuantity : "0"}
          </p>
        </Link>
        <img
          className="menu-icon"
          src={assets.menuIcon}
          alt="icon"
          onClick={toggleSidebar}
        />
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open-sidebar" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <NavLink to="/" onClick={toggleSidebar}>
            HOME
          </NavLink>
          <NavLink to="/collection" onClick={toggleSidebar}>
            COLLECTION
          </NavLink>
          <NavLink to="/about" onClick={toggleSidebar}>
            ABOUT
          </NavLink>
          <NavLink to="/orders">history</NavLink>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
