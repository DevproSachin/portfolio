import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";


function Footer() {
  return (
    <div>
          <div className="flex flex-wrap justify-center bg-black">
      {/* Column 1 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className=" p-4"> 
           <a className="logos text-4xl text-white cursor-pointer font-extrabold"><span className="text-red-500">S </span>CODER!</a>
           <p className='text-white Lowercase py-5'>I Have 4 +Year Experience In The Field Of Designing And Development. 
            Since Begining My Journey In This Field,
            My Dedication To The Work And Motivation To Grow Have Led Me To Exceptional Projects And Experiences.
            </p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 ">
        <div className="text-white text-center p-4">Follow Me </div>
        <div className = 'content text-center flex justify-center text-white'>
        <IoLogoInstagram className="text-white w-[30px] h-[30px]"/>
        <IoLogoLinkedin className="text-white w-[30px] h-[30px]"/>
        <IoLogoGithub className="text-white w-[30px]  h-[30px]"/>
        <IoLogoWhatsapp className="text-white w-[30px] h-[30px]"/>
        </div>
      </div>

      {/* Column 3 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="text-white text-center p-4">Contact Me </div>
        <div className = 'content text-center flex flex-col justify-center text-white'>
        <IoCall className="text-white w-[30px] h-[30px]"/> <a href="tel:7814795249" className='mt-[-20px]'>7814795249</a>
        <IoChatbox className="text-white w-[30px] h-[30px]"/> <a href="mailto:sachusharma233@gmail.com">Sachusharma233@gmail.com</a> 
        <IoLocation className="text-white w-[30px] h-[30px]"/> Kangra HImachal pradesh Pin:176029
        </div>
      </div>

      
    </div>

      <div className='footer-copyright bg-black text-white text-center pb-5'>
           Copyright © 2023 Sachin personal Portfolio . Designed by Sachin
      </div>
    </div>
  )
}

export default Footer
