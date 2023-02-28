import React from "react";

const MarketData = ({ data }) => {
  return (
    <div className="market__data">
      <h3>Market Data</h3>
      <div className="data">
        {data?.map((data, idx) => (
            <div key={idx}>
              <h5>{data?.heading}</h5>
              <p>{data?.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MarketData;
