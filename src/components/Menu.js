import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
const Menu = ({ title, menuObject }) => {
  const [Click, SetClick] = useState(false);
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  // useEffect(() => {
  //   if (Click) {
  //     const element = document.getElementById("radio");
  //     element.style.fontSize = "20px";
  //     element.style.color = "blue";
  //   }
  // }, [SetClick]);
  function handleClick() {
    SetClick(true);
  }

  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        <li key={0}>
          <Link to="/">Genre</Link>
          <i>{BiSolidCategoryAlt}</i>
        </li>

        {menuObject &&
          menuObject.map((li) => (
            <li key={li.id}>
              <a href="">
                <i>{li.icon}</i> <span>{li.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
