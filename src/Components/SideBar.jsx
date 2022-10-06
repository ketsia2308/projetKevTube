import React from 'react'
import logo2 from '../../src/Assets/logo2.png'
import Ketsia from '../../src/Assets/KETSIA.jpeg'
import Kwadra from '../../src/Assets/kwadrakora.jpg'
import Fally from '../../src/Assets/Droit chemin (copie).jpg'
import Dadju from '../../src/Assets/Dadju.jpg'
import Gaz from '../../src/Assets/Gaz Mawete.jpg'
import Diamond from '../../src/Assets/Diamond (autre copie).jpg'

export default function SideBar() {
  return (
    <div className='w-[350px] h-screen bg-[#60A5FA] rounded-r-2xl'>
        <div className='px-4 py-4'>
            <div className='flex items-center justify-between'>
                <a href="#"> <img src={logo2} className='w-[150px] h-[40px]'/></a>
                <div>
                  <img src={Ketsia} alt='' className='w-[40px] h-[40px] rounded-full'/>
                </div>
            </div>
        </div>
        <div className='px-6 pt-4'>
          <input type='text' className='w-full border border-black rounded px-2 py-1.5 text-sm font-light bg-[#60A5FA] placeholder-white' placeholder='Recherche'/>
        </div>
        <h1 className='text-[25px] text-left pt-10 pl-6 pb-10 text-white'><strong>Abonnements</strong></h1>
        <div className='flex pt-5 pl-6'>
          <img src={Kwadra} alt='Koffi' className='w-[40px] h-[40px] rounded-full' />
          <p className='ml-8 text-white'><strong>KOFFI OLOMIDE</strong></p>
        </div>
        <div  className='flex pt-5 pl-6'>
          <img src={Fally} alt='Fally' className='w-[40px] h-[40px] rounded-full' />
          <p className='ml-8 text-white'><strong>FALLY IPUPA</strong></p>
        </div>
        <div  className='flex pt-5 pl-6'>
          <img src={Dadju} alt='Dadju' className='w-[40px] h-[40px] rounded-full' />
          <p className='ml-8 text-white'><strong>Dadju</strong></p>
        </div>
        <div  className='flex pt-5 pl-6'>
          <img src={Gaz} alt='Gaz' className='w-[40px] h-[40px] rounded-full' />
          <p className='ml-8 text-white'><strong>GAZ MAWETE</strong></p>
        </div>
        <div  className='flex pt-5 pl-6'>
          <img src={Diamond} alt='Diamond' className='w-[40px] h-[40px] rounded-full' />
          <p className='ml-8 text-white'><strong>Diamond Platnumz</strong></p>
        </div>
    </div>

  )
}
