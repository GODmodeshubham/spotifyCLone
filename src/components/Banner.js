import React from "react";
import Artist from "../images/artist.jpg";
import Check from "../images/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="Banner">
      <img src={Artist} className="bannerImg" alt="" />
      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artsits</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <img src={Check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span> Monthly Listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Banner;
