import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu " id="explore-menu">
      <h1>Explore Our menu </h1>
      <p className="explore-menu-text">
        A great restaurant is one that just makes you feel like you're not sure
        whether you went out or you came home and confuses you.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-item"
              key={index}
            >
              <img 
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ?"active":""}
              />

              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
