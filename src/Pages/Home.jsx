import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Companies from '../components/Companies'
import Footer from '../components/Footer'
import Background from '../components/Background'
function Home() {
  return (
    <div className='w-full h-screen bg-no-repeat bg-center'>
       <div>
       <Header></Header>
       <Banner></Banner>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Companies></Companies>
        <Footer></Footer>
       </div>
       
        
       
    </div>
  )
}

export default Home
