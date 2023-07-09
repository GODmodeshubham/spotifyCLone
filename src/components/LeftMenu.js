import React from "react";
import "../styles/LeftMenuStyles.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import MenuList from "./LeftMenuContainer";
import Menu from "./Menu";
import LeftMenuPlayList from "./LeftMenuPlayList";
import TrackList from "./TrackList";
const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>
          <h2>Spotify</h2>
        </div>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search...." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />
      <LeftMenuPlayList />
      <TrackList />
    </div>
  );
};

export default LeftMenu;
