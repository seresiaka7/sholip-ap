import React from 'react'
import Tarif from "../assets/tarif1.png"
import Sport3 from "../assets/sport3.png"
const Section2 = () => {
  return (

    <div>

<div className=' flex justify-between align-baseline  bg-cover '  >

<div className='mt-10 ml-10 mb-10 p-10 bg-slate-700 rounded-lg bg-cover ' style={{backgroundImage:`url(${Sport3})`}}> 

<img  src={Tarif} className=" "  width={500} height={60} />

 </div>
<div className=' my-10 mx-10 align-middle w-3/6  '> 
<div className='mt-15 pt-9'>
<div className='mt-20 pt-10 font-sans font-bold text-6xl my-10 pb-7 align-baseline  bg-white'>
Et hop, une deuxième vie
</div>
<p className='text-2xl  mt-10 pt-10 font-sans'>

Il s’est passé quelque chose avec votre produit ? Sholip vous offre un nouveau modèle, 
répare ou vous rembourse. Et votre journée reprend comme si de rien n'était.

<span className='flex flex-col my-5 text-blue-500'>Keep smiling</span>
  </p>

</div>
 </div>
 
</div>
    </div>
  )
}

export default Section2