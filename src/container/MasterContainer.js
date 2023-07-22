import React from "react";
import LeftMenu from "../components/LeftMenu";
import MainContainer from "../components/MainContainer";
import RightMenu from "../components/RightMenu";
import "../styles/mastercontainer.css";

const MasterContainer = () => {
  return (
    <div>
      <div className="App">
        <LeftMenu />
        <MainContainer />
        <RightMenu />
        <div className="background"></div>
      </div>
    </div>
  );
};

export default MasterContainer;
