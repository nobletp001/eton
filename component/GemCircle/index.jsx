import Image from 'next/image'
import React from 'react'
import bg from "../../src/assets/bg.png";

function GemCircle() {
  return (
    <div className="md:mt-[200px] mt-[100px] flex  flex-col md:flex-row md:mr-10 mr-1">
    <div className="flex-1 m-3 bg-[#0F0F0F] rounded-[32px] pl-3 md:pl-10 ">
    <h1 className="md:text-f75 text-[60px]  text-textA font-fInter font-normal mt-2">Gemcircle</h1>
    <div className=" md:w-2/3 font-normal lead-[30px] text-[28px] font-fInter text-white">Gemcircle in partnership with EnetPad will breed the finest project in the crypto space.</div>
    <div className="font-fInter text-f18 text-white font-thin mt-10">Raise capital for your project,</div>
    </div>
    <div className="flex-1 relative">
      <Image src={bg} alt="bg" />
      <button className="buttonContact absolute left-[25%] md:left-[35%] top-[50%]">Contact</button>
    </div>
            </div>
  )
}

export default GemCircle