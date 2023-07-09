import React from "react";
import { FaHeadphones, FaHeart, FaRegClock } from "react-icons/fa";

const AudioList = () => {
  return (
    <div className="AudioList">
      <h2 className="title">
        The List <span> 12 Songs</span>
      </h2>
      <div
        className="
        songsContainer"
      >
        <div className="songs">
          <div className="count">#001</div>
          <div className="song">
            <div className="imgBox">
              <img src="" alt="" />
            </div>
            <div className="section">
              <p className="songName">
                Take me On
                <span className="spanArtist">Artist Name</span>
              </p>
              <div className="hits">
                <p className="hit">
                  <i>
                    <FaHeadphones />
                  </i>
                  95,394,342
                </p>
                <p className="duration">
                  <i>
                    <FaRegClock />
                  </i>
                  03.04
                </p>
                <div className="favourite">
                  <i>
                    <FaHeart />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioList;
