import React from 'react'
/* import CardItem from '../Components/CardItem' */
import CardList from '../Components/CardList'
import SearchBar from '../Components/SearchBar'
import SideBar from '../Components/SideBar'
import Video from '../Components/Video'

export default function Videoplayer() {
  return (
    <div className='flex'>
       <div className='w-[500px]'>
         <SideBar/>
       </div> 
       <div className='ml-[100px]'>
       <SearchBar/>
         <Video/>
         <CardList/>
       </div>
    </div>
  )
}
