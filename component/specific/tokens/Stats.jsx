import React from "react";

const Stats = () => {
  return (
    <div className="stats__component flex__two">
      <div className="stat">
        <p>LIVE PRICE</p>
        <h5>$0.0233338</h5>
        <span>8.567%</span>
      </div>
      <div className="stat">
        <p>DAILY VOLUME</p>
        <h5>$0.0233338</h5>
        <span>$35,986</span>
      </div>
      <div className="stat">
        <p>BURNED</p>
        <h5>$3,407,5,986</h5>
        {/* <span>8.567%</span> */}
      </div>
      <div className="stat">
        <p>STAKED</p>
        <h5>77%</h5>
        {/* <span>8.567%</span> */}
      </div>
    </div>
  );
};

export default Stats;
