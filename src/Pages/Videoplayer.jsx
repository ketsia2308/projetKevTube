import React, { useContext, useEffect } from 'react'
/* import CardItem from '../Components/CardItem' */
import CardList from '../Components/CardList'
import SearchBar from '../Components/SearchBar'
import SideBar from '../Components/SideBar'
import Video from '../Components/Video'
import { gapi, loadAuth2 } from 'gapi-script'
import appContext from '../context'
import { useNavigate } from 'react-router-dom'
import { clientId } from '../config'

export default function Videoplayer() {

  const { setUser, setAccessToken } = useContext(appContext)
  const navigate = useNavigate();
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
      console.log(auth2.isSignedIn.get(), auth2)
      if (auth2.isSignedIn.get()) {
        const user = auth2.currentUser.get()
        setUser(user)
        setAccessToken(user.xc.access_token)
      } else {
        navigate('/')
      }
    }
    setAuth2();
  }, []);

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
