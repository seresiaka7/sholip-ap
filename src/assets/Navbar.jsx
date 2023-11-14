import React from 'react'
import Vite from "../assets/react.svg"
import Logo from "../assets/lo1.png"
const Navbar = () => {
  return (
    <div className="text-white   font-palanquin font-semibold  ">

        <header className="bg-blue-700 flex  justify-between  items-center w-full h-20 fixed">
            
                <div className='absolute my-6 mx-7 mt-7'>
                    <img src={Logo} alt="logo "className='w-20 h-20' />
                </div>
                <nav className=' flex   justify-end items-end flex-1  mx-10 gap-10 "'>

                <div >
                <ul className="flex justify-end items-end flex-1  mx-10 gap-10 ">
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black hover:italic hover:shadow-lg shadow-white '> Home </li>
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black  hover:italic'>Services </li>
                   <li className='hover:bg-white hover:border-solid hover:rounded-md p-2 hover:text-black hover:italic'>About </li>
                </ul>
                </div>
                </nav>
        </header>
    </div>
  )
}

export default Navbar