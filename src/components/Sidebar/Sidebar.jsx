/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <div className="sidebar-logo">
        <h5>
          <BsCart4 />
        </h5>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
