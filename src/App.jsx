import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './assets/Navbar'
import Section1 from './Sections/Section1'
import viteLogo from '/vite.svg'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Footer from './Sections/Footer'
import Section5 from './Sections/Section5'
export default function App() {
  return (
    <div className=''   >
     <div>
    <Navbar/>
    </div>
    <div>
    <Section1 />
    </div>
    <div>
      <Section2/>
    </div>
    <div>
      <Section3/>
    </div>
    <div>
      <Section4/>
    </div>
    <div>
    <Section5/>
    </div>
    <div>
      <Footer/>
    </div>

    </div>
  )
}
// 

