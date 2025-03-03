import React from 'react'
import sachin from "../assets/intro image.png"
import resume from "../assets/cv.pdf"
//import Anime from 'react-anime';
import { Apptext } from '../Constants'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
function Banner() {
  return (
   
    <div className="flex flex-col md:flex-row my-14 justify-between  items-center  md:px-32 px-5">
        <div className=" left w-[100%] h-full text-center">
             <motion.h1  initial = {{ x:1250} } 
             animate = {{x:0}}
             transition={{
                  duration:'1',
                  delay:'1'

             }} 
             className="text-white text-4xl md:text-[150px] md:leading-[170px]  font-extrabold uppercase">{Apptext.hello}<br/> {Apptext.name}. </motion.h1>
             <motion.div  initial = {{ y:300} } 
             animate = {{y:0}}
             transition={{
                  duration:'1',
                  delay:'1.5'

             }} >
             <p className="my-5 text-white text-4xl font-black"><TypeAnimation
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
           </motion.div>
        </div>
        {/* <motion.div className="right w-[100%] md:w-1/2" initial = {{ x:1000} } 
             animate = {{x:0}}
             transition={{
                  duration:'2',
                  delay:'1'

             }} >
           <img src= {sachin} alt="myimage" className=""/>
        </motion.div> */}

    </div>
    
  )
}

export default Banner
