import React from "react";
import "../styles/RightMenu.css";
import {
  FaBell,
  FaCogs,
  FaCrow,
  FaCrown,
  FaRegHeart,
  FaSun,
} from "react-icons/fa";
const RightMenu = () => {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>
      </div>
      <div className="profileImage"></div>
    </div>
  );
};

export default RightMenu;
