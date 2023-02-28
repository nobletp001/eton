import React, { useState } from "react";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

const AddressCopy = () => {
  const [copy, setCopy] = useState(false);
  const [value, setValue] = useState("0x89304064026906306902460902-4604699284");

  const handleCopy = () => {
    toast("Copied successfully!");
    // copy("0x89304064026906306902460902-4604699284");
  };

  return (
    <div className="address__copy flex__center">
      <h5>CONTRACT ADDRESS</h5>
      <div className="flex__center">
        <p>0x89304064026906306902460902-4604699284</p>{" "}
        <img src="/copy.svg" alt="copy" />
      </div>
      <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
        <p onClick={handleCopy}>click to copy</p>
      </CopyToClipboard>
    </div>
  );
};

export default AddressCopy;
