import React from "react";
import "./Header.scss";
import { FaRocketchat } from "react-icons/fa";

const Header = () => (
  <div className="Header">
    <div className="logo-container">
      <FaRocketchat className="logo-icon" />
      <h2>GoChat</h2>
    </div>
    <p className="tagline">Your Modern Chat Application</p>
  </div>
);

export default Header;
