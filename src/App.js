// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MasterContainer from "./container/MasterContainer";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MasterContainer />} />
      <Route path="/user_mood" element={<Feedback />} />
    </Routes>
  );
}

export default App;
