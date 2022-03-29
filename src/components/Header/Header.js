import React from "react";
import "./Header.css";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div id="navbar">
      <ul>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/logo-s.png"}
            alt="Home"
            id="brand"
          />
        </li>
        <li className="vertical-line" id="brand">
          <a href="/">WoW-professions</a>
        </li>
        <li className="vertical-line">
          <a href="/">Profession Leveling Guides</a>
        </li>

        <li className="vertical-line">
          <a href="/">Farming Guides</a>
        </li>

        <li className="vertical-line">
          <a href="/">Wow Classic</a>
        </li>

        <li className="vertical-line">
          <a href="/">TBC Classic</a>
        </li>
        <li>
          <input type="text" placeholder="Search"></input>
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "white" }}
            />
          </button>
        </li>
        <li>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <FontAwesomeIcon
            icon={faSun}
            style={{ marginLeft: "2px", color: "white" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Header;
