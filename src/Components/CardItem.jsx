import React from 'react'
import Fally from '../../src/Assets/Fally.jpeg'
import Ima from '../../src/Assets/Ima (copie).jpg'
import KoffiOlomode from '../../src/Assets/KoffiOlomide.jpg.jpg'
import fally from '../../src/Assets/Droit chemin (copie).jpg'
import Dadju from '../../src/Assets/Dadju.jpg'
import Kwadra from '../../src/Assets/kwadrakora.jpg'

export default function CardItem() {
  return (
    <div className='flex'>
            <div className='h-[75px] w-[160px]'>
                <img src={Fally} alt='Fally'/>
               <div className='flex justify-between'>
                 <img src={fally} alt='Fally' className='w-[40px] h-[40px] rounded-full' />
                 <h1 className='text-black text-sm'><strong>Fally Ipupa</strong><br/>Science-Fiction(Audio)</h1>
                </div>
            </div>
    </div>
  )
}
