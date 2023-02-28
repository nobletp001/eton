import Image from 'next/image';
import React from 'react'
import A1 from "../../assets/A1.png";
import A2 from "../../assets/A2.png";
import A3 from "../../assets/A3.png";
import A4 from "../../assets/A4.png";
import A5 from "../../assets/A5.png";
import A6 from "../../assets/A6.png";
import A7 from "../../assets/A7.png";
import RING from "../../assets/ring.png";
import CEO from "../../assets/ceo.png";
import AMBASSADOR from "../../assets/ambassador.png";



function AboutUs() {
  return (
    <div className='md:mx-[5%] mx-[1%]'>
<div className='md:mt-[100px] mt-[50px] w-full flex flex-col justify-center items-center'>
  <div className='text-center md:text-[80px] text-[50px] md:w-[78%] w-full  font-fInter font-medium leading-[130%]  text-white'>Creating a sustainable 
</div>
<div className='text-center  text-textC md:text-[80px] text-[50px] md:w-[78%] w-full  font-fInter font-medium leading-[130%] '>web3 system</div>
</div>
<div  className='md:mt-[100px] mt-[50px] w-full flex flex-col justify-center items-center'>
  <p className='text-center  text-A md:text-f24 md:w-[50%] w-full  font-fInter font-normal leading-[211%] '>We genuinely believe in the power of community, using products built from the ground up, with the end user in mind — every step of the way.</p>
</div>

<div className="mt-[100px]">
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

<div className='mt-[100px] w-full flex  justify-center items-center'>
<div className='md:w-[80%] w-full  flex flex-col md:flex-row gap-10 redefineCard shadow-lg'>
<div className='flex-1 flex justify-center flex-col  '>
<p className='text-[45px] text-A leading-[148%] font-bold  px-5  md:px-10 md:text-[64px] font-fInter'>Redefining the future of Decentralization means thinking </p>

<div className='text-white text-[45px] leading-[148%] font-bold  px-5  md:px-10 md:text-[64px] font-fInter'>Differently</div>
</div>

<div className='flex-1  flex justify-center flex-col px-4 '>
<Image
src={RING}
alt="ring"
/>
  <p className='text-f18 mt-5 px-3 md:px-0 font-normal text-white leading-[211%]'>We believe that the undeniable power of blockchain technology is paramount in turning retail investors into a self-sufficient and unstoppable force. The tokenisation of assets will usher in an era of ethical, accountable, and unrestricted investing. We’re here to distribute its power — now and as it evolves, in an easy-to-use, secure and genuinely user-led package.</p>
</div>
</div>
</div>
<div className='mt-[100px]'>
<h2 className='text-center text-[80px] font-semibold text-white font-fInter leading-[135%]'>Team</h2>
<div className='w-full flex justify-center items-center mt-20'>

  <div>
    <Image
    src={CEO}
    alt="ceo"
    />
    <h4 className='font-semibold font-fdm text-center mt-8  text-white leading-[120%]'>Offor Johncee</h4>
    <p className='text-[24px] leading-[120%] font-medium font-fInter text-A text-center mt-5'>CEO</p>
  </div>
</div>
<div className='flex w-full justify-center items-center'>
<div className='flex gap-10 flex-wrap mt-20 md:w-[95%] w-full justify-center items-center'>
<div>
    <Image
    src={AMBASSADOR}
    alt="ceo"
    />
    <h4 className='font-semibold font-fdm text-center mt-8 text-white  leading-[120%]'>Quivira Ophir</h4>
    <p className='text-[24px] leading-[120%] font-medium font-fInter text-A text-center mt-5'>CTO</p>
  </div>
  <div>
    <Image
    src={AMBASSADOR}
    alt="ceo"
    />
    <h4 className='font-semibold font-fdm text-center text-white mt-8  leading-[120%]'>Mona</h4>
    <p className='text-[24px] leading-[120%] font-medium font-fInter text-A text-center mt-5'>COO</p>
  </div>
  <div>
    <Image
    src={CEO}
    alt="ceo"
    />
    <h4 className='font-semibold font-fdm text-center mt-8  text-white leading-[120%]'>Falco Pangkey</h4>
    <p className='text-[24px] leading-[120%] font-medium font-fInter text-A text-center mt-5'>CMO</p>
  </div>
  <div>
    <Image
    src={CEO}
    alt="ceo"
    />
    <h4 className='font-semibold font-fdm text-center mt-8  text-white leading-[120%]'>Falco Pangkey</h4>
    <p className='text-[24px] leading-[120%] font-medium font-fInter text-A text-center mt-5'>CCO</p>
  </div>
</div>
</div>
</div>

<div className='my-[100px] '>
<h1 className='text-center md:text-[80px] text-[50px] text-white font-semibold leading-[135.5%] font-fInter'>Contact Us</h1>
<div className='w-full flex justify-center items-center mt-10'>
<div className='flex md:w-[70%] w-full flex-col md:flex-row gap-10 items-center'>
<div className='flex-1 w-full px-4 md:px-0'>
<div className='borderInput'>
<input type="text" name="" placeholder='Full Name' className='placeholder:text-white px-4 outline-none w-full h-full bg-transparent' id="" />
</div>

<div className='borderInput mt-10'>
<input type="text" name="" placeholder='Email Address' className='placeholder:text-white px-4 outline-none w-full h-full bg-transparent' id="" />
</div>
</div>
<div className='flex-1 w-full px-4 md:px-0'>
<div className='borderInput2 '>
<textarea type="text" name="" placeholder='' className='placeholder:text-white px-2 outline-none w-full h-full bg-transparent' id="" />
</div>
</div>
</div>
</div>
<div className='w-full flex justify-center items-center mt-10'>
  <div className='flex md:w-[70%] w-full justify-end items-center px-4 md:px-0'>
<button className='buttonSmall'>Send</button>

  </div>
</div>
</div>

<div className='md:my-[200px] my-[100px]'>
<div className='flex gap-10  flex-col md:flex-row flex-wrap  items-center w-full'>
<div className='flex-1'>
<h1 className='text-[35px] text-white leading-[135%] font-bold font-fInter'>Business</h1>
<p className='md:text-[25px] text-[22px]  text-A leading-[135%] font-normal font-fInter'>Business
For all Business enquiries,
Please contact us on
</p>
<p className='md:text-[25px] text-[22px] md:mt-6 mt-3 text-textGreen leading-[135%] font-bold font-fInter'>Business@enetecosystems.com</p>
</div>
<div className='flex-1'>
<h1 className='text-[35px] text-white leading-[135%] font-bold font-fInter'>Job</h1>
<p className='md:text-[22px] text-[20px]  text-A leading-[135%] font-normal font-fInter'>
For all marketing enquiries 
please contact us on

</p>
<p className='md:text-[25px] text-[22px] md:mt-6 mt-3 text-textGreen leading-[135%] font-bold font-fInter'>
Job@enetecosystems.com

</p>

</div>
<div className='flex-1'>
<h1 className='text-[35px] text-white leading-[135%] font-bold font-fInter'>

Other Enquiries

</h1>
<p className='md:text-[22px] text-[20px]  text-A leading-[135%] font-normal font-fInter'>
For information, enquiries, Reports
Please contact us on


</p>
<p className='md:text-[22px] text-[20px] md:mt-6 mt-3 text-textGreen leading-[135%] font-bold font-fInter'>
Support@enetecosystems.com


</p>

</div>
</div>

</div>
    </div>
  )
}

export default AboutUs