import React from 'react'
import Vite from "../assets/react.svg"
const Navbar = () => {
  return (
    <div className='text-black md:flex  flex-row'>

        <header className='md:flex md:flex-row justify-between '>
            <nav>

                <div className='absolute'>
                    <img src={Vite} alt="" />
                </div>
                <div className="flex flex-row justify-between" >
                <ul>
                   <li>Home </li>
                   <li>Home </li>
                   <li>Home </li>
                </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar