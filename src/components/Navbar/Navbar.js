import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      {/* <img src={assets.icon1} alt="" className="logo2" /> */}
      {/* <img src={assets.food1} alt="" className="logo1" /> */}

      <ul className="navbar-menu">
        <li onClick={() =>setMenu("home")} className={menu === "home" ?"active":""}>Home</li>
        <li onClick={() =>setMenu("menu")} className={menu === "menu" ?"active":""}>Menu</li>
        <li  onClick={() =>setMenu("app")} className={menu === "app" ?"active":""}>Mobile-app</li>
        <li onClick={() =>setMenu("contact")} className={menu === "contact" ?"active":""}>Contact us</li>
      </ul>
      {/* <div className="navbar-right"> */}
      <button className="button">sign in </button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
