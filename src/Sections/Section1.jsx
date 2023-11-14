import React from 'react'
import Logo from "../assets/logo.png"
import Vi from "../assets/s2.png"
import Bg from "../assets/s1.png"
//  style={{backgroundImage:`url(${Bg})`}}
const Section1 = () => {
  return (
    <div  className=" " >

<div className=' flex justify-between align-baseline  bg-cover '  >


<div className=' my-10 mx-10 align-middle w-3/6  '> 
<div className='mt-15 pt-9'>
<div className='mt-20 pt-10 font-sans font-bold text-6xl my-10 pb-7 align-baseline  bg-white'>
La protection pour
les objets auxquels 
vous tenez le plus.
</div>
<p className='text-2xl  mt-10 pt-10 font-sans'>

 Un pépin avec votre produit ? Sholip  vous apporte une solution et votre vie continue.

  </p>
  <button className=' text-white text-lg font-semibold mt-5 p-5 font-sans bg-black rounded-full capitalize border-dashed border-white border-4'>Se connecter </button>
  
</div>
 </div>
 <div className='mt-10 p-10'> 

<img  src={Vi} className=" "  width={800} height={60}/>

 </div>
</div>
    
    </div>
  )
}

export default Section1