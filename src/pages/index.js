import { Footer } from "component/specific/footer";
import { Header } from "component/specific/header";
import Image from "next/image";
import React from "react";
import Arrow from "../assets/arrow.png";
import ArrowGreen from "../assets/arrowGreen.png";
import G1 from "../assets/G1.png";
import G2 from "../assets/G2.png";
import G3 from "../assets/G3.png";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
import A5 from "../assets/A5.png";
import A6 from "../assets/A6.png";
import A7 from "../assets/A7.png";
import bg from "../assets/bg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,  Autoplay, } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles from './slider.module.scss'

import bgHome from "../assets/bgHome.png";
import Head from "next/head";
import Slidercard from "component/Slidercard/Slidercard";
import OurSerices from "component/OurService";
import GemCircle from "component/GemCircle";
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

function Index() {
  return (
 <>
 <Head>
  <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</Head>
    <div className="bg-[url('../assets/bg.svg')] ">
      <Header />
      <div className="ml-[5%] mr-[3%]">
        <div class="grid md:grid-cols-3 xs:grid-cols-12 gap-1">
          <div class="mt-[200px] ">
            <h1 className="text-f50  md:text-f64  font-fdm">
              <span className="textGradient">The better way</span> to experience
              Web3 Power
            </h1>
            <h2 className="mt-3 text-A text-f20">
              Building Innovative Ecosystem and Nurturing Ideas Into Usable
              Products
            </h2>

            <button className="customButton mt-10">
              <h1>Explore Features</h1>
              <Image
                className="ml-4"
                src={Arrow}
                alt="arrow"
                width={30}
                height={20}
              />
            </button>
          </div>

        </div>
        <div class="grid md:grid-cols-2 xs:grid-cols-12 gap-1 mt-[200px]  md:mb-[150px] ">
<div className="relative mb-20 md:mb-0">
<Image
                className=""
                src={G2}
                alt="card"
               
              />
              <Image
                className="absolute md:left-[25%] md:top-[20%] left-10 top-20"
                src={G1}
                alt="card"
               
              />
               <Image
                className="absolute left-0 top-[50%] "
                src={G3}
                alt="card"
               
              />
</div>
<div>
  <div className="text-[50px] font-semibold  text-white font-fInter pr-2  md:pr-9">
  Re - Imagining Investment through a <span className="text-textP"> New Perspective</span>
  </div>
  <div className="text-f20 font-semibold text-A leading-[40px] font-fInter pr-2  md:pr-[50px]">Bringing retail investors the tools they deserve to succeed in the digital asset market. <span className="text-textGreen">#ForThePeople</span>
  <span className="inline"><Image
                className="ml-4 inline"
                src={ArrowGreen}
                alt="arrow"
                width={30}
                height={20}
              /></span>
  </div>

  <button className="customButton2 md:mt-[200px] mt-[20px]">
              <h1>Explore Features</h1>
              
            </button>
</div>
        </div>
        <div className="mt-[100px]">
<h2 className="text-white text-fInter text-f40 text-center">Web3 Partners</h2>
<div className="flex flex-wrap gap-14 justify-center mt-5 md:mx-10 mx-2">
<Image
                
                src={A1}
                alt="A1"
               
              />
              <Image
                
                src={A2}
                alt="A2"
               
              />
              <Image
                
                src={A3}
                alt="A3"
               
              />
              <Image
                
                src={A4}
                alt="A4"
               
              />
              <Image
                
                src={A5}
                alt="A5"
               
              />
              <Image
                
                src={A6}
                alt="A6"
               
              />
              <Image
                
                src={A7}
                alt="A7"
               
              />
</div>
        </div>
        <div className="mt-[50px]">
<h2 className="text-white text-fInter text-f40 text-center">Partners With Us</h2>
<div className="flex flex-wrap gap-14 justify-center mt-5 md:mx-10 mx-2">
<Image
                
                src={A1}
                alt="A1"
               
              />
              <Image
                
                src={A2}
                alt="A2"
               
              />
              <Image
                
                src={A3}
                alt="A3"
               
              />
              <Image
                
                src={A4}
                alt="A4"
               
              />
              <Image
                
                src={A5}
                alt="A5"
               
              />
              <Image
                
                src={A6}
                alt="A6"
               
              />
              <Image
                
                src={A7}
                alt="A7"
               
              />
</div>
        </div>
        
        <div className="my-[200px] ">
<h2 className="text-white text-fInter text-f40 text-center">Our Products</h2>
<h4 className="text-textA text-fInter text-f20 text-center">Empowering the people</h4>


<Slidercard/>
        </div>

      
        <div className="mt-[150px]">
<h2 className="text-white text-fInter text-f40 text-center">Press Articles</h2>
<div className="flex flex-wrap gap-14 justify-center mt-5 md:mx-10 mx-2">
<Image
                
                src={A1}
                alt="A1"
               
              />
              <Image
                
                src={A2}
                alt="A2"
               
              />
              <Image
                
                src={A3}
                alt="A3"
               
              />
              <Image
                
                src={A4}
                alt="A4"
               
              />
              <Image
                
                src={A5}
                alt="A5"
               
              />
              <Image
                
                src={A6}
                alt="A6"
               
              />
              <Image
                
                src={A7}
                alt="A7"
               
              />
</div>
        </div>

       <OurSerices/> 
       <GemCircle/>
     
        <div className="my-[200px] md:hidden ">
<h2 className="text-white text-fInter text-f40 text-center">Latest News</h2>
<div className="flex flex-wrap gap-4 mt-5 ">
<div className="card1 mt-10 relative">
<Image
   className="w-full h-full object-cover"           
                src={bg}
                alt="atm"
               
              />
<div className="absolute cardSmall top-[50%] p-5 h-1/2 w-full">
  <div className="text-A font-thin text-[15px] font-fInter">Dec 31 2022</div>
  <div className="text-f20 text-white mt-6 font-normal font-fInter">2022 - A pivotal year for 
Strike X</div>
<div className="text-textGreen font-light text-f15 font-fInter justify-end flex mt-5">Read News</div>
</div>
</div>
<div className="card1 mt-10 relative">
<Image
   className="w-full h-full object-cover"           
                src={bg}
                alt="atm"
               
              />
<div className="absolute cardSmall top-[50%] p-5 h-1/2 w-full">
  <div className="text-A font-thin text-[15px] font-fInter">Dec 31 2022</div>
  <div className="text-f20 text-white mt-6 font-normal font-fInter">2022 - A pivotal year for 
Strike X</div>
<div className="text-textGreen font-light text-f15 font-fInter justify-end flex mt-5">Read News</div>
</div>
</div>
<div className="card1 mt-10 relative">
<Image
   className="w-full h-full object-cover"           
                src={bg}
                alt="atm"
               
              />
<div className="absolute cardSmall top-[50%] p-5 h-1/2 w-full">
  <div className="text-A font-thin text-[15px] font-fInter">Dec 31 2022</div>
  <div className="text-f20 text-white mt-6 font-normal font-fInter">2022 - A pivotal year for 
Strike X</div>
<div className="text-textGreen font-light text-f15 font-fInter justify-end flex mt-5">Read News</div>
</div>
</div>
<div className="card1 mt-10 relative">
<Image
   className="w-full h-full object-cover"           
                src={bg}
                alt="atm"
               
              />
<div className="absolute cardSmall top-[50%] p-5 h-1/2 w-full">
  <div className="text-A font-thin text-[15px] font-fInter">Dec 31 2022</div>
  <div className="text-f20 text-white mt-6 font-normal font-fInter">2022 - A pivotal year for 
Strike X</div>
<div className="text-textGreen font-light text-f15 font-fInter justify-end flex mt-5">Read News</div>
</div>
</div>
</div>


        </div>



        <div className="my-[200px] hidden md:block">
<h2 className="text-white text-fInter text-f40 text-center">Latest News</h2>
<div className="">
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
        className="h-[320px] mt-10 "
      >
     
    {
      ServiceArray.map((f)=>{
        return(
          <SwiperSlide key={f.id}>

   
<div className="h-full  relative card">
<Image
   className="w-full h-full object-cover"           
                src={bg}
                alt="atm"
               
              />
<div className="absolute cardSmall top-[50%] p-5 h-1/2 w-full">
  <div className="text-A font-thin text-[15px] font-fInter">Dec 31 2022</div>
  <div className="text-f20 text-white mt-6 font-normal font-fInter">2022 - A pivotal year for 
Strike X</div>
<div className="text-textGreen font-light text-f15 font-fInter justify-end flex mt-3 ">Read News</div>
</div>
</div>
       
      
          </SwiperSlide>
        )
      })
    }  
      
      </Swiper>

</div>
        </div> 
      </div>
      <Footer/>
    </div>
 </>
  );
}

export default Index;
