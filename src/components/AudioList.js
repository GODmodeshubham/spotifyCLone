import React, { useEffect, useState } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import MusicPlayer from "./MusicPlayer";
import { useDispatch, useSelector } from "react-redux";
import { setBg } from "../context/actions/bgAction";
const AudioList = () => {
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);
  const [songs, setSongs] = useState(Songs);
  const [myAudio, setMyAudio] = useState(Songs);
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre);

  //************************************************************************* */

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  //*************************************************************************** */
  let mySongs = Songs;

  useEffect(() => {
    mySongs = Songs.filter(
      (audio) => audio.type === genre || genre === "" || genre === null
    );
    // console.log(mySongs);
    setMyAudio(mySongs);
  }, [genre]);

  //**************************************************************************** */
  const handleClick = (id) => {
    myAudio.forEach((song) => {
      if (song.id === id) {
        // console.log("clicked", id);

        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    // console.log(songSrc);
    // console.log(imgSrc);
    setSong(songSrc);
    setImg(imgSrc);
    dispatch(setBg(imgSrc));
    // console.log(img);
    // console.log(song);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The List <span> {myAudio?.length} Songs</span>
      </h2>
      <div
        className="
        songsContainer"
      >
        {myAudio &&
          myAudio.map((song, index) => (
            <div
              className="songs"
              key={index}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{index + 1}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
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
                    <div
                      onClick={() => {
                        handleClick(song?.id);
                      }}
                      className="favourite"
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer
        song={song ? song : Songs[0].song}
        imgSrc={img ? img : Songs[0].imgSrc}
      />
    </div>
  );
};

export default AudioList;
