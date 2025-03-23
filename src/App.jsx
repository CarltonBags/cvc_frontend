import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import marv from './assets/marv.jpg'
import graf from './assets/graph.jpg'
import ball from "./assets/tball.png"
import Versus from './components/Versus'
import Time from './components/Time'
import Join from './components/Join'
import Kontakt from './components/Kontakt'
import Ads from './components/Ads'



function App() {

  return (
    <div>
      <div className="flex flex-col justify-center">
        <Navbar />
      </div>
      <div className="mt-32 font-bold text-7xl font-intro border-b-6 border-double pb-20 flex justify-center">
        <div className="max-w-[700px]">
         BECOME PART OF THE GREATEST MOMENT IN <span className="tennis-green">TENNIS</span>.
        </div>
      </div>
      <div className="mt-20">
        <Versus />
      </div>
      <div className="mt-40">
        <Time />
      </div>
      <div className="mt-20">
        <Join />
      </div>
      <div className="mt-20">
        <Ads/>
      </div>
      <div className="mt-20">
        <Kontakt />
      </div>


    </div>
      

  )
}

export default App
