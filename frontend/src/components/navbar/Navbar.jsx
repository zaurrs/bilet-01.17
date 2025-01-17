import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaShoppingBasket } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {basket} = useSelector((state)=>state.basket)
  const total = basket.reduce((acc, item)=>acc + item.count, 0)
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>ESTORE.</h2>
        </div>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catagori">Catagori</Link>
          </li>
          <li>
            <Link to="/latest">Latest</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <div className="wrapper">
    <div className="basket">
    <Link to="/basket"><FaShoppingBasket /></Link>
<sup>{total}</sup>
    </div>
          <Link to="/wishlist"><CiHeart /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
