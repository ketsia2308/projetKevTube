import React from 'react'
import Vecteur from '../../src/Assets/Vecteur.png'

export default function AuthentificationHome() {
  return (
    <div className='bg-[#60A5FA] w-1/2 h-screen flex justify-center items-center'> 
        <div>
           <img src={Vecteur} className = 'w-[270px] h-[300px]' alt='Vecteur' />
        </div>
        <p className='text-white text-[23px] text-justify'><strong>Bienvenue chez KeVTube<br/>et profiter de la qualité des vidéos<br/> que nous vous <br/> proposons</strong></p>
    </div>
  )
}
