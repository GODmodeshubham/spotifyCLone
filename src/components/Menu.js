import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
const Menu = ({ title, menuObject }) => {
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
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        <li key={0}>
          <Link to="/user_mood">Genre</Link>
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
