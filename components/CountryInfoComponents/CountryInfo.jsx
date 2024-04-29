import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

function CountryInfo({newData }) {

  const [isDark] = useContext(ThemeContext);

  return (
    <>
      <main  className={`${isDark?"dark":""}`} style={{height:"100vh"}} >
        
        <div className="country-details-container">
          <Link className="back-button" to="/">
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </Link>
          <div className="country-details">
            <img src={newData.flags.svg} alt="" />
            <div className="details-text-container">
              <h1>{newData.name.common}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name : {newData.name.common} </b>
                  <span className="native-name"></span>
                </p>
                <p>
                  <b>Population : {newData.population}</b>
                  <span className="population"></span>
                </p>
                <p>
                  <b>Region : {newData.region}</b>
                  <span className="region"></span>
                </p>
                <p>
                  <b>Sub Region: {newData.subregion} </b>
                  <span className="sub-region"></span>
                </p>
                <p>
                  <b>Capital : {newData.capital[0]} </b>
                  <span className="capital"></span>
                </p>

                <p>
                  <b>Currencies : </b>
                  <span className="currencies"></span>
                </p>
                <p>
                  <b>Languages : {newData.languages.sqi} </b>
                  <span className="languages"></span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryInfo;

// export const fetchingData = async()=>{
//     await fetch(`https://restcountries.com/v3.1/name/Moldova?fullText=true`)
//   }
