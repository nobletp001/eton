import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,  Autoplay, } from "swiper";
import ATM from "../../src/assets/atm.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import {MdKeyboardArrowRight} from "react-icons/md";

const ServiceArray =[{
    id:1,
    name:'Crypto Ramps',
    sub:'Plug-Ins For Easy Access and Exit from Web3 and Crypto Platforms. Direct fiat to crypto purchases that provide mainstream-friendly access to crypto and web3 services.'
  },
  {
    id:2,
    name:'POS',
    sub:'Our partners can accept crypto/Fiat currency seamlessly with the use of POS, exposing  business to over $500 Billion cryptocurrency market'
  },
  {
    id:3,
    name:'Payment Rails',
    sub:'Accept popular payment methods including credit and debit cards, fiat mobile wallets, and bank transfers.'
  },
  {
    id:4,
    name:'Enetcard',
    sub:'Spend funds Anytime Anywhere.Register and manage your crypto linked card.'
  }
  
  ]
function OurSerices() {
  return (
   <>
     <div className="mt-[100px] hidden md:block">
        <h2 className="text-white text-fInter text-f40 text-center">Our Service</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="md:h-[390px] h-auto  mt-10 hidden md:block "
      >
     
    {
      ServiceArray.map((f)=>{
        return(
          <SwiperSlide key={f.id}>

          <div className="h-full  card">
        <Image
                      
                        src={ATM}
                        alt="atm"
                       
                      />
        <div className="h-[30%]">
        <h1 className="text-f22 text-textA font-fInter font-normal mt-2">{f.name}</h1>
        <div className="text-f15 font-semibold text-A leading-[25px] font-fInter">{f.sub}</div>
        </div>
      <div className="h-[13%] flex align-bottom">
      <button className="buttonComing place-self-end  ml-4">Coming soon  <MdKeyboardArrowRight className="inline" /></button>
      </div>
        </div>
       
      
          </SwiperSlide>
        )
      })
    }  
      
      </Swiper>

  

        </div>
        <div className="mt-[100px] md:hidden">
        <h2 className="text-white text-fInter text-f40 text-center">Our Service</h2>
<div className="flex flex-wrap gap-3 mt-5">
  

<div className="card">
<Image
              
                src={ATM}
                alt="atm"
               
              />
<div className="mx-4">
<h1 className="text-f22 text-textA font-fInter font-normal mt-2">POS</h1>
<div className="text-f15 font-semibold text-A leading-[25px] font-fInter">Our partners can accept crypto/Fiat currency seamlessly with the use of POS, exposing  business to over $500 Billion cryptocurrency market</div>
</div>
<button className="buttonComing mt-5 ml-4">Coming soon  <MdKeyboardArrowRight className="inline" /></button>
</div>
<div className="card">
<Image
              
                src={ATM}
                alt="atm"
               
              />
<div className="mx-4">
<h1 className="text-f22 text-textA font-fInter font-normal mt-2">Payment Rails</h1>
<div className="text-f15 font-semibold text-A leading-[25px] font-fInter">Accept popular payment methods including credit and debit cards, fiat mobile wallets, and bank transfers.</div>
</div>
<button className="buttonComing mt-5 ml-4">Coming soon  <MdKeyboardArrowRight className="inline" /></button>
</div>
<div className="card">
<Image
              
                src={ATM}
                alt="atm"
               
              />
<div className="mx-4">
<h1 className="text-f22 text-textA font-fInter font-normal mt-2">Enetcard</h1>
<div className="text-f15 font-semibold text-A leading-[25px] font-fInter">Spend funds Anytime Anywhere.
Register and manage your crypto linked card.</div>
</div>
<button className="buttonComing mt-5 ml-4">Coming soon  <MdKeyboardArrowRight className="inline" /></button>
</div>
</div>
        </div>
   </>
  )
}

export default OurSerices