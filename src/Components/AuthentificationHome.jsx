import React from 'react'
import FemmeHeureuse from '../../src/Assets/Femme Heureuse.png'

export default function AuthentificationHome() {
  return (
    <div className='bg-[#60A5FA] w-1/2 h-screen flex justify-center items-center'> 
        <div>
           <img src={FemmeHeureuse} className = 'w-[300px] h-[350px] mb-[75px] ' alt='Vecteur' />
        </div>
        <p className='text-white text-[23px]'><strong>Bienvenue chez KeVTube<br/>et profiter de la qualité des vidéos<br/> que nous vous <br/> proposons</strong></p>
    </div>
  )
}
