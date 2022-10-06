import React from 'react'
import Balmain from '../../src/Assets/Balmain.jpeg'

export default function Video() {
  return (
    <div className=''>
        <div className='rounded-2xl relative pt-[10px] w-[500px] h-[300px]'>
            <img src={Balmain} alt='Balmain' className='w-[500px] h-[300px] rounded-2xl'/>
            <div className='bg-white h-[8px] w-[95%] mx-auto absolute inset-x-0 bottom-1'>
            <p id="bar-progress"></p>
            </div>
        </div>
    </div>
  )
}
