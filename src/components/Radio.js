import React, { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import MainContainer from "./MainContainer";
import axios from "axios";
// import { RadioBrowserApi } from "radio-browser-api";

const Radio = () => {
  const [Stations, SetStations] = useState([]);
  const getData = async () => {
    try {
      const data = await axios
        .get("http://localhost:5000/radio_connections")
        .catch((error) => console.log(error));
      console.log(data);

      console.log(Stations.name);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
    // .then(console.log(data));
  }, []);

  return (
    <div>
      <LeftMenu />
      <MainContainer />

      <div className="background">
        {Stations ? Stations.name : "NO staion listed"}
      </div>
    </div>
  );
};

export default Radio;
