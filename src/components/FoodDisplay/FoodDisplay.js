import React, { useState } from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import { assets } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  const [itemCounts, setItemCounts] = useState(Array(food_list.length).fill(0));
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      if (updatedCartItems[itemId] > 0) {
        updatedCartItems[itemId] -= 1;
      }
      return updatedCartItems;
    });
  };

  const handleIncrement = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index]++;
    setItemCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...itemCounts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
    }
    setItemCounts(newCounts);
  };

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          // if(category == "All" || category == item.category){
            
          // }
          return (
            <div className="food-item" key={index}>
              <div className="food-item-img-container">
                <img className="food-item-image" src={item.image} alt="" />
                <div className="">
                  {cartItems[item.id] === 0 || !cartItems[item.id] ? (
                    <img
                      className="add"
                      onClick={() => addToCart(item.id)}
                      src={assets.add_icon_white}
                      alt=""
                    />
                  ) : (
                    <div className="food-item-counter">
                      <img
                        onClick={() => removeFromCart(item.id)}
                        src={assets.remove_icon_red}
                        alt=""
                      />
                      <p className="">{cartItems[item.id]}</p>
                      <img
                        onClick={() => addToCart(item.id)}
                        src={assets.add_icon_green}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="food-item-info">
                <div className="food-item-name-rating">
                  <p>{item.name}</p>
                  <img
                    className="food-rating"
                    src={assets.rating_stars}
                    alt=""
                  />
                </div>
                <p className="food-item-desc">{item.description}</p>
                <p className="food-item-price">₹{item.price}</p>
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
