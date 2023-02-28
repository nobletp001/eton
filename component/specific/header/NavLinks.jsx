import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { Links } from './Links'
import {RiArrowDownSLine} from "react-icons/ri";
import {RiArrowUpSLine} from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai";


function NavLinks({setOpen}) {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [active, setActive] = useState("");

  return (
  <>
            <div onClick={()=>setOpen(false)} className='flex justify-end mr-4 mt-2 cursor-pointer text-2xl font-bold md:hidden'>
                <AiOutlineClose/>
            </div>

  {
    Links.map((l)=>{
        return(
           <div  key={l.id}>
            <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className=" md:py-0 py-7 flex justify-between   items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== l.name ? setHeading(l.name) : setHeading("");
                setSubHeading("");
              if(!active){
                setActive(l.id)
              }
              else if(active ===l.id){
                setActive('')
              }else{
                setActive(l.id)

              }
              }}

            >
        
            <div>  {l.name}</div>
             {
                l.isSub &&  <div className='ml-1.5'>

               {
               active !==l.id && <RiArrowDownSLine />
               }
                  {
                active ===l.id && <RiArrowUpSLine />
               }

                </div>
                
             }
            </h1>
            {
                l.isSub && (
                    <div>
                         <div className= {`absolute top-[100px] hidden ${active ===l.id && "md:block"} `}>
                         <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-[#FFFFFF17] rotate-45"
                    ></div>
                  </div>
                       <div className='max-w-[520px]'>
                       <div className="bg-[#FFFFFF17] py-4 px-2 grid grid-cols-2  gap-5 ">
                            {
                                l.subLinks.map((a)=>{
                                    return(
                                 <Link key={a.id} href={a.url} onClick={()=> setActive('')}>
                                 
                                 <div   className='flex mx-1 py-1 items-center '>
                                      <Image className='object-contain mr-3  h-8 w-8' src={a.image} />
                                         <div>
                                         <h1 className=" text-white text-f16  ">
                                        {
                                            a.title
                                        }
                                      { a.title =='Career' &&  <span className='text-[#03EED8] pl-1 mt-4 text-[9px]'>hiring</span>}

                                      </h1>
                                      
                                      <h4  className="text-f10 text-textGreen   ">{a.sub}
                                      </h4>
                                         </div>
                                     </div>
                                 </Link>
                                    )
                                })
                            }
                         </div>
                       </div>
                         </div>
                    </div>
                )
            }
       
       {
        l.isSub &&         
        <div
        className={`
        ${heading === l.name ? "md:hidden" : "hidden"}
      `}
      >

{
l.subLinks.map((a)=>{
return(
    <div>
       <Link key={a.id} href={a.url} onClick={()=>setOpen(false)}>
                                 
                                 <div   className='flex mx-1 py-4 items-center '>
                                      <Image className='object-contain mr-3  h-8 w-8' src={a.image} />
                                         <div>
                                         <h1 className=" text-white text-f16  ">
                                        {
                                            a.title
                                        }
                                      { a.title =='Career' &&  <span className='text-[#03EED8] pl-1 mt-4 text-[9px]'>hiring</span>}

                                      </h1>
                                      
                                      <h4  className="text-f10 text-textGreen   ">{a.sub}
                                      </h4>
                                         </div>
                                     </div>
                                 </Link>
    </div>
)
})
}
      </div>
            }
            </div>
           </div> 
        )
    })
  }

  </>
  )
}

export default NavLinks