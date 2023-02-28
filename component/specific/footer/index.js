import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../src/assets/Logofooter.png'
import github from '../../../src/assets/gitUb.png'
import Instgram from '../../../src/assets/instag.png'
import Telegram from '../../../src/assets/telegra.png'
import Twitter from '../../../src/assets/twiter.png'
import Youtube from '../../../src/assets/Utube.png'
import A from '../../../src/assets/A.png'

import styles from "./styles.module.css"
export const Footer = () => {
    return (
      <footer className='mx-5 mt-10' >
        <div className="md:flex  md:gap-20 ">
        <div className='flex basis-2/6'>
      <div className='w-[200px] h-[200px] mr-2 hidden md:block'>
      <Image src={logo} className=" object-cover" />
      </div>
    <div className=''>
    <h2 className='text-B text-f36 font-fInter  font-normal'>
        Enetecosystem 
        </h2>
        <p className='text-f18 text-white  font-fInter font-thin leadng-10  tracking-tight wordSpacing'>
        Enetwork is a diverse platform re-defining and building new usable innovative products, paving way for a new distribution system in crypto space and offering a friendly platform to both users, Investors, developers, merchants and institutions.
        </p>

      <div className='md:flex gap-8 hidden pt-[250px]'>
      <Image src={Telegram} className=" object-cover" />
      <Image src={Twitter} className=" object-cover" />
      <Image src={Youtube} className=" object-cover" />
      <Image src={github} className=" object-cover" />
      <Image src={A} className=" object-cover" />


      </div>
     <div className='text-f18 hidden md:block font-fInter pt-[250px] text-white font-thin leadng-10  tracking-tight wordSpacing'>All Rights Reserved 2023 | E•network </div>

    </div>
     </div>

     <div className=' my-5 md:my-0' >
     
     <h2 className='text-B text-f36 font-fInter font-normal'>
     Ecosystem
        </h2>
      <Link href="/" className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
      Finance
        </p>
      </Link>
      <Link href="/infrastructure" className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      Infrastructure
        </p>
      </Link>
       <Link href="/health" className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
       <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
Health
        </p>
       </Link>
      <Link href="entertainment" className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
    Entertainment
        </p>
      </Link>
     </div>

     <div className='my-5 md:my-0 md:basis-1/2'>
    <div className='md:flex justify-between gap-10'>

    <div className=''>
     
     <h2 className='text-B text-f36 font-fInter font-normal'>
     Projects
        </h2>
       <Link  href="/enetpay" className='text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
       <p className='text-f18 my-5 text-white font-thin leadng-10 font-fInter  tracking-tight wordSpacing'>
        Enetpay


        </p>
       </Link>
     <Link href="/enetpad" className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
     <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Enetpad/Lab

        </p>
     </Link>
       <Link href="/enetdex" className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
       <p className='text-f18  font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Enetdex

        </p>
       </Link>
      <Link href="/enethub" className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Enethub

        </p>
      </Link>
   <Link href='/healtho' className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
   <p className='font-fInter text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
  
  Healtho 
  
          </p>
   </Link>
      <Link  href="/fanbase"className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
      <p className='font-fInter  text-f18 my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>

Fanbase
        </p>
      </Link>
     </div>
     <div className=''>
     
     <h2 className='text-B text-f36  font-fInter font-normal'>
     Participate
        </h2>
        <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
        MVPM/MVPY



        </p>
        <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Launchpad

        </p>
        <p className='text-f18 my-5 font-fInter text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Events


        </p>
        <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Staking

        </p>
      
     </div>
     <div className=''>
     
     <h2 className='text-B font-fInter text-f36  font-normal'>
     More
        </h2>
      <Link href='/aboutus'>
      <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        About us



        </p>
      </Link>
       <Link href="/blog">
       <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Blogs 



        </p>
       </Link>
       <Link href="/contactus">
       <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Contact us


        </p>
       </Link>
     <Link href='/ambassador'>
     <p className='text-f18  font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Ambassador


        </p>
     </Link>
     <Link href="/partnership">
     <p className='text-f18  font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Partnership


        </p>
     </Link>
      <Link href='whitepaper'>
      <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
        Whitepaper
        </p>
      </Link>
   <Link href='/career'>
   <p className='text-f18 font-fInter my-5 text-white font-thin leadng-10  tracking-tight wordSpacing'>
Career
        </p>
   </Link>
     </div> 
  
    </div>
    <div className='hidden pt-[50px]  md:block mr-8'>
    <h2 className='text-B text-f36 font-fInter  font-normal'>
    Join Newsletter
        </h2>
        <p className='text-f18 font-fInter  text-white font-thin leadng-10  tracking-tight '>
        Get the latest updates, Enetwork news and information delivered to your inbox.
        </p>
        <div className='flex gap-1 mt-3'>
<div className='inputContainer'>
  <input type="text" className='input' placeholder='Email' />
</div>
<button className='buttonCom font-fInter'>Subscribe</button>
        </div>
    </div>
     </div>
        </div>
        <div className=' pt-[10px]  md:hidden '>
    <h2 className='text-B text-f36  font-fInter font-normal'>
    Join Newsletter
        </h2>
        <p className='text-f18 font-fInter  text-white font-thin leadng-10  tracking-tight '>
        Get the latest updates, Enetwork news and information delivered to your inbox.
        </p>
        <div className='flex gap-1 mt-3'>
<div className='inputContainerSmallSceen'>
  <input type="text" className='input' placeholder='Email' />
</div>
<button className='buttonSmallScreen'>Subscribe</button>
        </div>
    </div>
   
    <div className='md:hidden flex justify-center gap-7 pt-[30px]'>
      <Image src={Telegram} className=" object-cover" />
      <Image src={Twitter} className=" object-cover" />
      <Image src={Youtube} className=" object-cover" />
      <Image src={github} className=" object-cover" />
      <Image src={A} className=" object-cover" />


      </div>
     <div className='text-f18  text-center md:hidden pt-[10px] text-white font-thin leadng-10  tracking-tight wordSpacing'>All Rights Reserved 2023 | E•network </div>
      
    </footer>
    )
}
