import GemCircle from 'component/GemCircle';
import Image from 'next/image';
import React from 'react'
import Arrow from "../../assets/arrow.png";
import Moon from "../../assets/moon.png";
import bgCard from "../../assets/bgCard.png";
import Etin2 from "../../assets/Etin2.png";
import Etin3 from "../../assets/Etin3.png";
import Etin4 from "../../assets/etin4.png";






function Enetpad() {
  return (
    <div className='bg-black'>
      <div className='ml-[5%]  mr-3'>
      <div class="grid md:grid-cols-2 xs:grid-cols-12 gap-10">
      <div class="md:mt-[200px]  mt-[50px]">
      <h1 className="text-f50 md:text-f64  font-fInter font-fdm">

      Get <span className='textGradient2'> early access</span> to nurtured ideas of <span className=' text-A '>tomorrow</span>
        
            </h1>

            <p className='text-A mt-5 md:mt-10 font-fInter text-f18 leading-[198.2%]'>Invest in well nurtured web3 utility projects and start-ups, a crypto and Non-crypto incubator created to present investors with the best ideas.</p>
            <div className='flex gap-4 items-center  mt-20'>
            <button className="customButton3 ">
              <h1>Upcoming Sales</h1>
              <Image
                className="ml-4"
                src={Arrow}
                alt="arrow"
                width={30}
                height={20}
              />
            </button>
<button className='buttonCom font-fInter'>Subscribe</button>

            </div>

       
      </div>
        <div className='mt-[150px] hidden md:block'>
          <Image
          src={Moon}
          alt="moon"
          />
        </div>
      </div>

      <div className='mt-20 w-full'>
              <h1 className='font-thin text-center font-fInter text-f16  tracking-[0.285em] leading-[127.9%] non-italic '> We Help You Raise Enough Funds To Support Your Project</h1>
<div className='w-full justify-center items-center flex mt-5'>
<div className='md:w-[70%] w-full borderStyle '>
<div className='w-full h-full flex justify-center items-center px-2'>
<div className='flex-1 borderRight'>
<h1 className='text-center md:text-f32 text-[20px] font-bold  text-white font-fInter'>$0</h1>
<p className='text-center font-fInter font-normal md:text-f16 text-[8px]  text-textC'>RAISED CAPITAL</p>
</div>
<div className='flex-1 borderRight'>
<h1 className='text-center md:text-f32 text-[20px] font-bold  text-white font-fInter'>$0</h1>
<p className='text-center font-fInter font-normal md:text-f16 text-[8px]  text-textC'>RAISED CAPITAL</p>
</div>
<div className='flex-1 borderRight'>
<h1 className='text-center md:text-f32 text-[20px] font-bold  text-white font-fInter'>$0</h1>
<p className='text-center font-fInter font-normal md:text-f16 text-[8px]  text-textC'>RAISED CAPITAL</p>
</div>
<div className='flex-1'>
<h1 className='text-center md:text-f32 text-[20px] font-bold  text-white font-fInter'>$0</h1>
<p className='text-center font-fInter font-normal md:text-f16 text-[8px]  text-textC'>RAISED CAPITAL</p>
</div>
</div>
</div>
</div>
            </div>
            <GemCircle/>
            <div className='mt-[50px]'>
            <h2 className="text-white text-fInter text-f40 ">Upcoming Events</h2>
            <div class="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 mr-5">
<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Allowlist open</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Fundraise Goal</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Max Allocation</p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>
<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Allowlist open</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Fundraise Goal</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Max Allocation</p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>
<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Allowlist open</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Fundraise Goal</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Max Allocation</p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>
            </div>
<div className='mt-[50px] mr-1'>
<div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center'>
<div className=''>
<h2 className="text-white text-fInter text-f36 font-bold ">Upcoming Events</h2>
<h1 className='font-semibold  font-fInter text-f18  tracking-[0.5em] mt-3 leading-[127.9%] non-italic '> Invest in products that breed value</h1>

</div>
<div className=' btnSmall flex justify-between items-center px-3'>
  <div>
<Image src={Etin4} 
alt='etin4'
/>
  </div>
<div className='flex gap-4 md:gap-0 items-center md:flex-col'>
  <p className='text-f16 font-fInter font-normal text-[#5D00F4]'>Total raised</p>
  <h1 className='text-f30 text-white font-fInter font-bold leading-[181%]'>$19,800,000</h1>
</div>
</div>
</div>
<div class="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 mr-5">

<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>
<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>

<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>

<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>

<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>

<div className='card3'>
<div className='h-[40%] w-full relative'>
  <p className='absolute top-2 right-2 text-f10 text-[ #C8CAFF] font-fInter'>Ended 12.12.2023</p>
<Image
src={bgCard}
alt="bgCard"
className='w-full'
/>
<div className='absolute md:bottom-[-50px] bottom-[-10px]'>
<Image
src={Etin3}
alt="etin3"
className='w-full'
/> 
</div>
</div>
<div className='subCard3 '>
<div className='p-4 w-full'>
<div className='flex justify-between items-center mt-5'>
  <h2 className='leading-[198.02%] font-fInter font-bold text-white text-f25'>Alpha-Dogs</h2>
  <Image 
  src={Etin2}
  alt="etin2"
  />
</div>
<p className=' font-normal text-f17 font-fInter  text-textD'>$INER</p>
<h3 className='text-f21 font-fInter font-normal mt-10'>The Dog of the Wolf street.</h3>
<div className='flex items-center justify-between mt-10 gap-3'>
<p className=' font-normal text-f22 font-fInter flex-2 text-textD'>Raised funds</p>
<div className='borderBottom flex-1'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3,670,000</h3>


</div>
<div className='flex items-center justify-between mt-4 gap-3'>
<p className=' font-normal text-f22 font-fInter  text-textD'>Participants </p>
<div className='borderBottom md:w-[40%] w-[20%]'></div>
<h3 className='text-f22 font-fInter font-normal flex-1 '>$3590</h3>


</div>

</div>

<div className='h-[50px] w-full mt-2 br flex justify-center items-center bg-[#1E1E1E]'>
  <h1 className='font-bold text-f16 font-fInter  text-textD'>TOKEN SALE</h1>
</div>

</div>
</div>
            </div>

</div>
<div className='w-full flex justify-center items-center mt-20'>
<button className='buttonExplore font-fInter'>Explore</button>

</div>

<div className='mt-[50px] cardBottom mr-5 md:py-[100px] py-[10px] px-5 md:px-10'>
<div className='flex w-full md:flex-row flex-col h-full items-center justify-center md:justify-between'>
  <h2 className='text-white text-fInter text-f30 md:w-[65%] '>Never want to miss a sale?</h2>
  <div className='flex gap-1 w-full mt-4 md:mt-0  md:w-[35%]'>
<div className='inputContainerSmallSceen2'>
  <input type="text" className='input' placeholder='Email' />
</div>
<button className='buttonSmallScreen'>Subscribe</button>
        </div>
</div>

</div>

<div className='my-[50px] cardBottom mr-5 md:py-[100px] py-[10px] px-5 md:px-10'>
<div className='flex w-full md:flex-row flex-col h-full items-center justify-center md:justify-between'>
  <h2 className='text-white text-fInter text-f30 md:w-[65%] '>Want to incubate your project on Enetlab</h2>
  <button className='buttonSmallScreen max-w-[259px] w-full mt-5 md:mt-0'>Apply for Launch</button>

</div>

</div>

            </div>
      </div>


    </div>
  )
}

export default Enetpad