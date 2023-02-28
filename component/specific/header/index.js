import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../../src/assets/pngs/logo.png'
import styles from "./styles.module.css"
import { FiMenu } from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import NavLinks from './NavLinks'
import Button from './Button'

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const w= width < 650? '' : styles.headerContainer

    return (
        <header className={styles.headerContainer}>
          <div className={styles.header}>
        <Link href="/">
        <div className={styles.logoWrapper}>
            <Image src={logo} />
            <p style={{ marginTop: 20 }} className="text-white">E•network</p>
          </div>
        </Link>
          <div className="text-3xl md:hidden cursor-pointer text-white" onClick={() => setOpen(!open)}>
            {
              open ? <AiOutlineClose/> : 
  <FiMenu />

            }
          </div>
        <div className='w-[70%] md:flex hidden justify-center gap-10 '>
        <NavLinks  setOpen={setOpen} />
        </div>

          <div className="md:block hidden">
          <Button />
        </div>
          </div>

          <ul
          className={`
        md:hidden bg-black text-white fixed w-full top-0 overflow-y-hidden bottom-0 py-1 pl-5
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
        
          <NavLinks  setOpen={setOpen} />
          <Button />
        </ul>
        </header>
    )
}