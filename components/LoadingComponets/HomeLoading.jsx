import React from "react";

function HomeLoading() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((val, idx) => {
        return <div key={idx} className="country-card homeloading"></div>;
      })}
    </div>
  );
}

export default HomeLoading;
