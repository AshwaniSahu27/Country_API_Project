import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);


  return (
    <>
      <header className={`header-container ${isDark?"dark":""}`}>
        <div className="header-content"
       
        >
          <h2 className="title">
            <Link to="/">Where in the world?</Link>
          </h2>
          <p className="theme-changer"
               onClick={() => {
                setIsDark(!isDark);
                localStorage.setItem("isDarkMode", !isDark);
              }}
          >
            <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`}></i>
            &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
          </p>
        </div>
      </header>
    </>
  );
}
