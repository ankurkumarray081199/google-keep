// import React, { useState } from "react";
import logo from "../Pics/keep.png";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import pics from "../Pics/ankur.webp";

export const Header = () => {
  // const [bg, setBg] = useState([]);
  // const response = () => {};
  return (
    <>
      <section>
        <div className="header__main">
          <div className="menu__logo">
            <div className="menu__icon">
              <button className="menu__btn">
                <MenuIcon />
              </button>
            </div>
            <div className="logo__div">
              <img src={logo} alt="img" />
              <span>Keep</span>
            </div>
          </div>
          <div className="second__div">
            <div className="search__div">
              <div className="search__icon">
                <SearchIcon />
              </div>
              <div className="search__input">
                <input type="search" placeholder="Search" />
              </div>
            </div>
            <div className="icons__div">
              <div className="icons" id="refresh">
                <RefreshIcon />
              </div>
              <div className="icons" id="list">
                <GridViewIcon />
              </div>
              <div className="icons" id="settings">
                <SettingsIcon />
              </div>
            </div>
          </div>
          <div className="options__div">
            <div className="options" id="option1">
              <AppsIcon />
            </div>
            <div className="options" id="option2">
              <img src={pics} alt="profile" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
