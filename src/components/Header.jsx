import React, { useState } from 'react'
import { motion } from "framer-motion"
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <motion.div initial={{ opacity: 0,  y:-100  } }
       animate={{ opacity: 1 , y:10}} 
       transition={{
        duration: "2",
        delay: "0.5",
    }} className="heads flex justify-between flex-row sm:flex-row  px-10 py-3" >
        <a className="logos text-4xl text-white cursor-pointer font-extrabold" href="https://devprosachin.github.io/portfolio/"><span className="text-red-500">S </span>CODER!</a>
        <div className="hidden md:flex">
          <ul className=" gap-4 md:gap-14 cursor-pointer font-extrabold flex flex-row place-items-center"> 
            <li className="transition ease-in hover:scale-125"><a href="https://devprosachin.github.io/portfolio/" className="text-white hover:text-red-600">Home</a> </li>
            <li className="transition ease-in hover:scale-125"><a href="#rt" className="text-white hover:text-red-600">About</a></li>
            <li className="transition ease-in hover:scale-125"><a href="#sr" className="text-white hover:text-red-600"> SKills </a></li>
            <li className="transition ease-in hover:scale-125"><a href="#port" className="text-white hover:text-red-600"> Showcase </a> </li>
            <li className="transition ease-in hover:scale-125"><a href="#ftr" className="text-white hover:text-red-600">Contact</a></li>
          </ul>
        </div>
        <div className="text-red-600 lg:hidden md:hidden">
        {!toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer" onClick={() => setToggle(true)} stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer float-right" onClick={() => setToggle(false)} stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
        {toggle ?
          <ul className="flex flex-col bg-gray-400 mt-8">
            <li className="p-5 transition ease-in hover:scale-125"><a href="https://devprosachin.github.io/portfolio/" className="text-red-700 hover:text-black">Home</a> </li>
            <li className="p-5 transition ease-in hover:scale-125"><a href="#rt" className="text-red-700 hover:text-black">About</a></li>
            <li className="p-5 transition ease-in hover:scale-125"><a href="#sr" className="text-red-700 hover:text-black"> SKills </a></li>
            <li className="p-5 transition ease-in hover:scale-125"><a href="#port" className="text-red-700 hover:text-black"> Showcase </a> </li>
            <li className="p-5 transition ease-in hover:scale-125"><a href="#ftr" className="text-red-700 hover:text-black">Contact</a></li>
          </ul>
          : null}
      </div>
      </motion.div>
    
    </>
  )
}

export default Header
