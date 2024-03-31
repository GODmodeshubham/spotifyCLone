// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MasterContainer from "./container/MasterContainer";
import Feedback from "./components/Feedback";
import Radio from "./components/Radio";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Feedback />} />
      <Route path="/user_mood" element={<MasterContainer />} />
      <Route path="/radio" element={<Radio />} />
    </Routes>
  );
}

export default App;
