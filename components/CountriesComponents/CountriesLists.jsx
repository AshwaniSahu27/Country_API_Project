import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import HomeLoading from "../LoadingComponets/HomeLoading";

export default function CountriesLists({ query, selectedOption }) {
  const [countryData, setCountryData] = useState([]);
  const [changes,setChanges]  = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, [changes]);


  useEffect(() => {
    if (selectedOption !== "") {
      fetch(`https://restcountries.com/v3.1/region/${selectedOption}`)
        .then((res) => res.json())
        .then((data) => {
          setCountryData(data)
        });
    }else{
       setChanges(!changes)
    }
  }, [selectedOption]);



  if (countryData.length === 0) {
    return <HomeLoading />;
  }

  return (
    <>
      <div className="countries-container">
        {countryData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((data) => {
            return (
              <Card
                key={data.name.common}
                name={data.name.common}
                flag={data.flags.svg}
                population={data.population}
                region={data.region}
                capital={data.capital}
                data={data}
              />
            );
          })}
      </div>
    </>
  );
}
