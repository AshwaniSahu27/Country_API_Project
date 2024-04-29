import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../LoadingComponets/Loading";

function Layout() {
  const params = useParams();
  const [newData, setNewData] = useState();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      setNewData(state);
      return;
    }
    fetch(
      `https://restcountries.com/v3.1/name/${params.username}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewData(data[0]);
      });
  }, []);

  if (newData === undefined) {
    return <Loading />;
  }

  return (
    <>
      <CountryInfo newData={newData} />
    </>
  );
}

export default Layout;
