/* eslint-disable react/prop-types */
import "./Card.css";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt={title} />
        <div className="card-info">
          <h4 className="card-heading">{title}</h4>
          <div className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span>{reviews}</span>
          </div>

          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="card-bag">
              <BsFillBagHeartFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
