import React from 'react'
import softweaver from '../assets/softweaver.jpg'
import aicreatives from '../assets/aicreatives.jpg'
import rad from '../assets/rad.jpg'
import { companies } from '../Constants'
function Companies() {
  return (
    <div>
            <div className="classname">
                <div>
                 <h2 className="text-white text-center text-5xl">{companies.heading} </h2>
                 <hr className="w-20 h-2 mx-auto my-1 bg-red-600"/>
                 </div>
                 <div className='flex justify-around text-center flex-wrap md:flex-nowrap mt-[80px] mb-[80px] px-5 md:px-32'>
                    <div className='mb-5 md:mb-0'>
                     <img src={softweaver} className='h-[80px] object-cover text-center mx-auto'></img>
                     <h2 className='pt-5 text-center text-white'>Softweaver Technologies (6mnths)</h2>
                     </div>
                     <div className='mb-5 md:mb-0'> 
                        <img src={aicreatives} className='h-[80px] object-cover text-center mx-auto'></img>
                        <h2 className='pt-5 text-center text-white'>Aicreatives (3y 10mnths)</h2>
                     </div>
                    <div className='mb-5 md:mb-0'>
                    <img src={rad} className='h-[80px] object-cover text-center mx-auto'></img>
                    <h2 className='pt-5 text-center text-white'>RadTech (7mnths)</h2>
                    </div>
                    
                 </div>
            </div>
    </div>
  )
}

export default Companies
