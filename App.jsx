import React, { useContext } from "react";
import "./style.css";
import Search from "./components/SubComponents/Search";
import Select from "./components/SubComponents/Select";
import CountriesLists from "./components/CountriesComponents/CountriesLists";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedOption,setSelectedOption] = useState("")
  
  const [isDark]  = useContext(ThemeContext)
   

  return (
    <>
      <main className={`${isDark?"dark":""}`}>
        <div className="search-filter-container">
          <Search setQuery={setQuery} />
          <Select setSelectedOption={setSelectedOption} />
        </div>
        <CountriesLists query={query} selectedOption={selectedOption} />
      </main>
    </>
  );
}
