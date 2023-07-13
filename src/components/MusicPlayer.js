import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
const MusicPlayer = ({ song, imgSrc }) => {
  const [isLove, setIsLove] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const second = Math.floor(audioPlayer.current.duration);
    setDuration(second);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  //******************************************************** */
  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin}:${returnSec}`;
  };

  //******************************************************* */
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  //***************************************************************** */

  const changedLoved = () => {
    setIsLove(!isLove);
  };
  //********************************************** */
  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };
  //************************************************************* */
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  //************************************************************** */

  const changePlayPuase = () => {
    const prev = playing;
    if (!prev) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setPlaying(!prev);
  };
  //************************************************************* */

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changedLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playpause" onClick={changePlayPuase}>
              {playing ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
