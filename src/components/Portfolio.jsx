import React from 'react'
import belle from '../assets/belle.png'
import ugg from '../assets/ugg.png'
import Drmonica from '../assets/monica.png'
import Bongo from '../assets/Bongo.png'
import acme from '../assets/acme.png'
import pacific from '../assets/pacific.png'
import {motion} from 'framer-motion'
function Portfolio() {
    return (
        <motion.div initial = {{opacity : 0,scale:0}}
        whileInView={{opacity : 1,scale:1}}
        transition={{duration:0.9 }}    
        viewport = {{once:true}}  
        id="port" className='mb-[80px]'>
            <div className='text-center mt-[80px]'>
            <h1 className="text-white">Portfolio</h1>
            <hr className="w-20 h-2 mx-auto my-1 bg-red-600"/>
            <p className='py-5 w-[70%] text-white m-auto'>As a passionate web developer, I'm thrilled to showcase my expertise, creativity, and dedication to crafting exceptional digital experiences.
                With a focus on user-centric design and cutting-edge technologies, I strive to bring ideas to life and deliver seamless, visually stunning websites.</p>
           </div>
           <div className="row flex flex-wrap md:flex-nowrap gap-4 mb-5 mt-2 px-5 md:px-32">
                  <div className="projects bg-gray bg-opacity-[0.1] text-center">
                      <a href="https://www.bellebathrooms.com.au/"target="_blank" ><img src={belle}/></a><br/>
                      <a href="https://www.bellebathrooms.com.au/" target="_blank" className="pt-5">BELLEBATHROOMS (Wordpress)</a>
                  </div>
                  <div className="projects bg-gray bg-opacity-[0.1] mb-5 md:mb-0 text-center">
                  <a href="https://www.theuggstore.com.au/" target="_blank"><img src={ugg} className='h-[88%] object-cover'/></a><br/>
                      <a href="https://www.theuggstore.com.au/" target="_blank" className="pt-5">TheuggStore (Shopify)</a>
                  </div>
                  <div className="projects bg-gray bg-opacity-[0.1] mb-5 md:mb-0 text-center">
                  <a href="http://drmonicacrooks.com/" target="_blank"> <img src={Drmonica} className='h-[88%] '/> </a> <br/>
                      <a href="http://drmonicacrooks.com/" target="_blank" className="pt-5 ">DRMONICACROOKS (Wordpress)</a>
                  </div>
           </div>
           <div className="row flex flex-wrap md:flex-nowrap gap-4 mb-5 mt-2 px-5 md:px-32">
                  <div className="projects bg-gray bg-opacity-[0.1] text-center">
                  <a href="https://www.bongoiot.com/" target="_blank"><img src={Bongo} className='h-[88%] object-cover'/></a><br/>
                      <a href="https://www.bongoiot.com/" target="_blank" className="pt-5">BONGOIOT(Wordpress ACF)</a>
                  </div>
                  <div className="projects bg-gray bg-opacity-[0.1] text-center">
                  <a href="https://www.bellebathrooms.com.au/" target="_blank"><img src={acme} className='h-[88%] object-cover'/></a><br/>
                      <a href="https://www.bellebathrooms.com.au/" target="_blank" className="pt-5">ACME (Shopify)</a>
                  </div>
                  <div className="projects bg-gray bg-opacity-[0.1] text-center">
                  <a href="https://www.pacificumtranslation.com/en/" target="_blank"><img src={pacific}/></a><br/>
                      <a href="https://www.pacificumtranslation.com/en/" target="_blank" className="pt-5">Pacificum (Wordpress)</a>
                  </div>
           </div>
        </motion.div>
    )
}

export default Portfolio
