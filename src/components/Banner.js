import React, { useEffect, useState } from "react";
import Artist from "../images/artist.jpg";
import Check from "../images/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setBg } from "../context/actions/bgAction";
const Banner = () => {
  // const DisplayBg = () => {
  //   const dispatch = useDispatch();
  //   let bg = useSelector((state) => state.data);
  //   if (bg === "") {
  //     dispatch(setBg(Artist));
  //   }
  //   // bg = useSelector((state) => state.background);
  //   console.log("clicked", bg);
  //   return bg;
  // };
  const bg = useSelector((state) => state.background);
  // console.log(bg);
  const [bgimage, setBgimage] = useState(Artist);

  useEffect(() => {
    setBgimage(bg);
    console.log(bg);
  }, [bg]);

  return (
    <div className="Banner">
      <img src={bgimage} className="bannerImg" alt="" />
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
