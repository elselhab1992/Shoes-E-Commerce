/* eslint-disable react/prop-types */
import "./Navbar.css";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Navbar = ({ handleInputChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-input">
          <input
            type="text"
            placeholder="Search ..."
            onChange={handleInputChange}
          />
        </div>
        <div className="nav-icons">
          <a href="#">
            <AiOutlineHeart className="icon" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="icon" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
