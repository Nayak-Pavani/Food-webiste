import React from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import { assets } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  return (
    <div className="food-display " id="food-display">
      <h2>Top dishes near you </h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <div className="food-item" key={index}>
              <div className="food-item-img-container">
                <img className="food-item-image" src={item.image} alt="" />
              </div>
              <div className="food-item-info">
                <div className="food-item-name-rating">
                  <p>{item.name}</p>
                  <img className="food-rating" src={assets.rating_stars} alt="" />
                </div>
                <p className="food-item-desc">{item.description}</p>
                <p className="food-item-price">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default FoodDisplay;
