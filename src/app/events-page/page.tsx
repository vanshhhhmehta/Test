import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
  import IPLMatchesThreeCards from './components/iplSection'


export default function MainEventsPage (){
  return (
    <div>
       <Navbar />
        <HeroSection/>
        <IPLMatchesThreeCards />
    </div>
  )
}

