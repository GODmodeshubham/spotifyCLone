import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import PlayList from "./PlayList";
const LeftMenuPlayList = () => {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playLists" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash">
                <BsTrash className="bin" />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftMenuPlayList;
