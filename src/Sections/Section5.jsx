import React from 'react'
import Pos from "../assets/pos.png"
import Time from "../assets/time.png"
import Simple from "../assets/simple.png"
const Section5 = () => {
  return (
    <div> 

        <div className='flex flex-col justify-center  items-center align-middle'>
            <div className='font-bold text-7xl mb-9'>
            Tout ira bien. Tout simplement.
            </div>
            <div className="w-70 text-center">
            Sholip a pour mission de vous libérer l'esprit au plus vite.
             Avec un interlocuteur dédié et des processus <br/>éclair, on vous permet de 
             retrouvez le cours de votre vie rapidement.

            </div>
            <div className='flex justify-between items-center gap-10 my-9 pt-8'>
                   <div className="flex flex-col justify-middle items-center" >
                         <div>
                            <img src={Simple} width={100} height={80}/>
                         </div>
                         <div>
                         Simple
                         </div>
                         <div>
                         Pas de justificatif impossible à trouver
                         </div>
                   </div>
                   <div className="flex flex-col justify-middle items-center">
                        <div>
                            <img src={Time}  width={100} height={80}/>
                         </div>
                         <div>
                          Rapide
                         </div>
                         <div>
                         Demande en ligne 
                       en 2 minutes
                         </div>

                   </div>
                   <div className="flex flex-col justify-middle items-center">
                        <div>
                            <img src={Pos} width={100} height={80}
                            />
                         </div>
                         <div>
                         Positif
                         </div>
                         <div>
                         Choisissez votre solution préférée
                         </div>

                   </div>
            </div>
        </div>
    </div>
  )
}

export default Section5