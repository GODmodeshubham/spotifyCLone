import React from "react";
import "../styles/feedback.css";
import { useDispatch } from "react-redux";
import { SetType } from "../context/actions/typeAction";
import { useNavigate } from "react-router-dom";
const Feedback = () => {
  const emoji = [
    { id: 1, name: "😴", type: "tired" },
    { id: 2, name: "🤩", type: "energetic" },
    { id: 3, name: "😢", type: "sad" },
    { id: 4, name: "😍", type: "romantic" },
    { id: 5, name: "😕", type: "confused" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id, type) => {
    console.log(type);
    dispatch(SetType(type));
    navigate("/");
  };

  return (
    <div className="grid">
      <div className="wrap">
        <div className="heading">
          <h1>Meet Your Fleet</h1>
        </div>
        <div className="emoji-conatiner">
          {emoji &&
            emoji.map((mood, index) => (
              <div
                onClick={() => handleClick(index, mood.type)}
                className="emoji-face"
                id={index}
              >
                {mood.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
