import React from 'react'
import sachin from "../assets/intro image.png"
import resume from "../assets/Resume.pdf"
//import Anime from 'react-anime';
import { Apptext } from '../Constants'
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  return (
   
    <div className="flex flex-col md:flex-row my-14 justify-between place-items-center  md:px-32 px-5">
        <div className=" left w-[100%] md:w-1/2">
             <h1 className="text-red-700 text-4xl md:text-8xl  font-extrabold uppercase">{Apptext.hello} {Apptext.name}. </h1>
             <p className="my-5 text-blue-900 text-4xl font-black"><TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
   `${Apptext.Designation}`,
    1000,
    `${Apptext.Designation1}`,
    1000,
  ]}
  speed={10}
  repeat={Infinity}
/></p>
           <a href={resume} className='text-white' download> 
             <button className="my-5 bg-red-700  hover:bg-black hover:text-white transition-all rounded-2xl"> Download Resume </button>
           </a>
        </div>
        <div className="right w-[100%] md:w-1/2">
           <img src= {sachin} alt="myimage" className=""/>
        </div>

    </div>
    
  )
}

export default Banner
