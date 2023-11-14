import React from 'react'
import Sect3 from "../assets/sect3.png"

const Section3 = () => {
  return (
    <div>

<div className=' flex justify-between align-baseline  bg-cover '  >


<div className=' my-10 mx-10 align-middle w-3/6  '> 
<div className='mt-15 pt-9'>
<div className='mt-20 pt-10 font-sans font-bold text-6xl my-10 pb-7 align-baseline  bg-white'>
Contre les vrais imprévus
</div>
<p className='text-1xl  mt-10 pt-10 font-sans'>

Sholip est là pour les petits incidents du quotidien parce qu’ils font partie de la vie. Et surtout, on vous dit clairement contre quoi vos objets sont protégés. Totale clarté.

<span className='flex flex-col mt-3'>C’est la vie</span>
  </p>
  
</div>
 </div>
 <div className='mt-10   p-3'> 

<img  src={Sect3} className="  "  width={800} height={60}/>

 </div>
</div>  
 <br/>

    </div>
  )
}

export default Section3