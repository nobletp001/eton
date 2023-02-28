import Image from "next/image";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const images = [
  { src: "/digitaljournal.svg", width: 101.63, height: 16.03 },
  { src: "/benzinga.svg", width: 107.49, height: 20.33 },
  { src: "/newsbtc.svg", width: 79.74, height: 26.78 },
  { src: "/ambcrypto.svg", width: 124.89, height: 25.6 },
  { src: "/marketwatch.svg", width: 107.1, height: 19.93 },
  { src: "/yahoo.svg", width: 100.7, height: 40.65 },
  { src: "/businessinsider.svg", width: 106.51, height: 43.97 },
];

const Partner = () => {
  return (
    <div className="partner__component">
      <h3 className="flex__center">
        Partner with us{" "}
        <div className="svg flex__center">
          <BiRightArrowAlt />
        </div>{" "}
      </h3>
      <div className="partners flex__two">
        {images.map((image, idx) => (
          <Image
            src={image.src}
            alt="Image"
            width={image.width}
            height={image.height}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
