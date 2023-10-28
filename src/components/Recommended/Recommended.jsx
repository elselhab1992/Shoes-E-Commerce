/* eslint-disable react/prop-types */
import "./Recommended.css";
import Buttons from "./../Buttons/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div>
        <Buttons handleClick={handleClick} value="" title="All Products" />
        <Buttons handleClick={handleClick} value="Nike" title="Nike" />
        <Buttons handleClick={handleClick} value="Adidas" title="Adidas" />
        <Buttons handleClick={handleClick} value="Vans" title="Vans" />
        <Buttons handleClick={handleClick} value="Puma" title="Puma" />
      </div>
    </div>
  );
};

export default Recommended;
