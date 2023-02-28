import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive'
import { EffectCoverflow, Pagination, Navigation , Autoplay,} from 'swiper';
import Phone from "../../src/assets/phone.png";
import Logo from "../../src/assets/smallLogo.png";
import {MdKeyboardArrowRight} from "react-icons/md";

import Image from 'next/image';
const card =[
  {
    id: 3,
    title: "Enetdex",
    sub: "Decentralized Peer-Peer orderbook",
    bg:'linear-gradient(179.49deg, #C47032 -21.81%, #323AFA 99.56%)'
  },

  {
    id: 2,
    title: "Enetpad",
    sub: "Explore and invest in Unique projects on time",
    bg:' linear-gradient(179.49deg, #331F00 11.06%, rgba(50, 58, 250, 0.66) 99.56%)'
  },
  {
    id: 1,
    title: "ENET Wallet",
    sub: "Buy and Store NFT’s  freely",
    bg:' linear-gradient(179.49deg, #FFFFFF -21.81%, #323AFA 99.56%)'
  },
  {
    id: 4,
    title: "Enethub",
    sub: "Blockchain powered Resort o crypto activities, Vacation Etc ",
    bg:"linear-gradient(179.49deg, #C47032 -21.81%, #323AFA 99.56%)"
  },
  {
    id: 5,
    title: "Fanbase",
    sub: "Helping creators establish strong financial relationship with their audience",
    bg:'linear-gradient(179.49deg, #331F00 5.37%, #323AFA 99.56%)'
  },
  {
    id: 6,
    title: "Sharon",
    sub: "Earn by marketing products for business ",
    bg:' linear-gradient(179.49deg, #01EAD4 -21.81%, rgba(50, 58, 250, 0.84) 99.56%)'
  },
  {
    id: 7,
    title: "Healtho",
    sub: "Revolutionizing the Healthcare with AI+Blockchain ",
    bg:' linear-gradient(179.49deg, #F80F0F -21.81%, #F3151B -12.33%, #B6509E 52.15%)'
  },
]
function Slidercard() {

  return (
    
 <>
<div className='hidden md:block w-full'>
<Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={10}
    // loop={true}
    slidesPerView={3}
    initialSlide={2}

    coverflowEffect={{
      rotate: 0,
      stretch: 150,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={{  clickable: true }}

    modules={[EffectCoverflow, Pagination]}
    className="h-[600px] w-full mt-5"
  >
  
 
{
  card.map((f)=>{
    return(
      <SwiperSlide className='h-full w-[300px] ' key={f.id}>
      <div className='h-full bg1] flex flex-col   rounded-2xl items-center' style={{
        background:f.bg
      }}>
        <div className='h-1/2 mt-10 flex flex-col  items-center px-3'>
        <Image
  src={Logo}
  alt="logo"
  />
  
  <h2 className='text-f32 text-white font-fInter font-semiboldt '>{f.title}</h2>
  <h2 className='text-f15 text-white font-fInter font-normal  text-center flex-wrap'>{f.sub} </h2>
  <button className="buttonComing  mt-10">Learn more  <MdKeyboardArrowRight className="inline" /></button>
  
        </div>
        <div className='h-1/2'>
  <Image
  src={Phone}
  alt="phone"
  />
  
  </div>
      </div>
      </SwiperSlide>
  
    )
  })
}

</Swiper>

</div>


<div className='w-full md:hidden pr-3'>

<Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={10}
    // loop={true}
    slidesPerView={1}
    initialSlide={2}

    coverflowEffect={{
      rotate: 0,
      stretch: 150,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={{  clickable: true }}

    modules={[EffectCoverflow, Pagination]}
    className="h-[600px] w-full mt-5"
  >
  
 
{
  card.map((f)=>{
    return(
      <SwiperSlide className='h-full w-[300px] ' key={f.id}>
      <div className='h-full bg1] flex flex-col   rounded-2xl items-center' style={{
        background:f.bg
      }}>
        <div className='h-1/2 mt-10 flex flex-col  items-center px-3'>
        <Image
  src={Logo}
  alt="logo"
  />
  
  <h2 className='text-f32 text-white font-fInter font-semiboldt '>{f.title}</h2>
  <h2 className='text-f15 text-white font-fInter font-normal  text-center flex-wrap'>{f.sub} </h2>
  <button className="buttonComing  mt-10">Learn more  <MdKeyboardArrowRight className="inline" /></button>
  
        </div>
        <div className='h-1/2'>
  <Image
  src={Phone}
  alt="phone"
  />
  
  </div>
      </div>
      </SwiperSlide>
  
    )
  })
}

</Swiper>
</div>
 </>
  )
}

export default Slidercard