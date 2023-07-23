// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MasterContainer from "./container/MasterContainer";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Feedback />} />
      <Route path="/user_mood" element={<MasterContainer />} />
    </Routes>
  );
}

export default App;
