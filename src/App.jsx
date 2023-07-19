import React from 'react';
import './App.css'
import Home from './Pages/Home';
import Background from './components/Background';
function App() {

  return (
    <>
      <Home/>
      <div className='w-full h-screen absolute top-0 left-0 -z-10'>
          <Background/>
       </div>
    </>
  )
}

export default App
