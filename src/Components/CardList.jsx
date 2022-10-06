import React from 'react'
import CardItem from './CardItem'

export default function CardList() {
  return (
    <div>
        <div className='bg-white m-auto w-full pt-[40px] h-[240px]'>
        <div className='flex justify-around'>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
        </div>
    </div>
  )
}
