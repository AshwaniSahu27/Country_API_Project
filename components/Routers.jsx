import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";

function Routers() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        <Header />
        <Outlet />
      </ThemeContext.Provider>
    </>
  );
}

export default Routers;
