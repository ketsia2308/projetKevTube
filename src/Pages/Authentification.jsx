import React from 'react'
import AuthentificationHome from '../Components/AuthentificationHome'
import Formulaire from '../Components/Formulaire'
import { Outlet } from 'react-router-dom'

export default function Authentification() {
  return (
    <div className='flex'>
      <AuthentificationHome />
      <Formulaire className='ml-300px' />
      <Outlet />
    </div>
  )
}
