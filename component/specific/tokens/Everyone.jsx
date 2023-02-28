import React from "react";

const Everyone = ({ description }) => {
  return (
    <div className="everyone__component flex__one">
      <div className="left">
        <h3>Now everyone can participate</h3>
        <img src="/everyone.svg" alt="everyone" />
        <div className="interfi flex__center">
          <h5> Interfi Audit</h5>
          <p>View Report</p>
        </div>
      </div>
      <div className="right">
        <p>{description}</p>
        <button>Coming soon</button>
      </div>
    </div>
  );
};

export default Everyone;
