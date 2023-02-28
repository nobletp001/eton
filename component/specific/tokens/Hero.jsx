import React from "react";

const Hero = ({ imageLink, imageInner }) => {
  return (
    <div className="token__hero flex__center">
      <img src={imageLink} alt="Image Link" />
      <img src={imageInner} alt="image Inner" className="image__layer" />

      {/* <div className="indicator flex__center">
        <div className="flex__center active">ENET Token</div>
        <div className="flex__center">INER Token</div>
      </div> */}
    </div>
  );
};

export default Hero;
