import React from 'react'
import about from "../assets/about.jpg"
const About = () => {
    return (
        <div>
            
            <div id="rt" className=" my-20 py-10  md:px-20 bg-gray-300 bg-opacity-10 shadow-red-500 text-center  h-[100vh] flex place-items-center bg-[url(assets/about.jpg)] bg-cover">
              <div className='w-[90%] md:w-[70%] mx-auto p-8 bg-white bg-opacity-[0.8] md:bg-opacity-[0.5] rounded'>
                <h1 className='text-black'>About Me </h1>
                <hr className="w-20 h-2  my-1 mx-auto bg-red-600"/>
                <p className='text-black py-5'>I HAVE 4 +YEAR EXPERIENCE IN THE FIELD OF DESIGNING AND DEVELOPMENT.
                    SINCE BEGINNING MY JOURNEY IN THIS FIELD, MY DEDICATION TO THE WORK AND MOTIVATION
                    TO GROW HAVE LED ME TO EXCEPTIONAL PROJECTS AND
                    EXPERIENCES.TAKE A MOMENT TO EXPLORE MY PORTFOLIO BELOW, WHICH INCLUDES A COMBINATION OF COLLABORATIONS,
                    COMMISSIONED WORK AND SIDE PROJECTS. DON’T HESITATE TO REACH OUT IF YOU’D LIKE TO LEARN MORE.
                </p>
                </div>
            </div>

        </div>
    )
}

export default About
