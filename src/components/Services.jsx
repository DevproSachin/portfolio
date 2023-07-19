import React from 'react'
import { services } from '../Constants'
import wordpress from '../assets/wordpress.png'
import shopify from '../assets/shopify.png'
import html from '../assets/html.png'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css-3.png'
import js from '../assets/js-file.png'
function Services() {
  return (
    <>
    <div id="sr" className='text-black'>
        <div className='text-center'>
          <h1 className="text-white">{services.heading}</h1>
          <hr className="w-20 h-2 mx-auto my-1 bg-red-600"/>
          <p className='py-5 w-[70%] m-auto text-white'>{services.description}</p>
        </div>
    </div>
    <div className='mt-10 px-5 md:px-32'>
           <div className='flex gap-4 flex-wrap md:flex-nowrap'>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={wordpress} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125 '/>
                  <h2 className='pb-5 text-2xl'>WORDPRESS </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={shopify} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>SHOPIFY </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={html} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>HTML </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={css} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>CSS </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
           </div>
           <div className='flex gap-4 flex-wrap md:flex-nowrap mt-10 mb-10'>
           <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white  px-3 py-4 ">
                <img src={bootstrap} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>BOOTSTRAP </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={js} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>JAVASCRIPT</h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={react} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>REACT JS </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="text-center bg-white shadow-xl rounded-xl hover:bg-red-600  hover:text-white px-3 py-4">
                <img src={wordpress} className = 'w-[80px] mx-auto pb-5 transition ease-in hover:scale-125'/>
                  <h2 className='pb-5 text-2xl'>WORDPRESS </h2>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               </div>
    </div>
    </>
  )
}

export default Services
