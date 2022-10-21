import React, { useEffect , useContext} from 'react'
import logo2 from '../../src/Assets/logo2.png'
import Login from './Login'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate, Navigate } from 'react-router-dom';
import appContext from '../context';
import { clientId } from '../config';
import Rectangle from '../../src/Assets/Rectangle 19.png'

export default function Formulaire() {
  const {user, setUser, setAccessToken} = useContext(appContext);
  const navigate = useNavigate()
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
      console.log(auth2.isSignedIn.get(), auth2)
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())
        console.log("Connected")
        navigate('/home',{replace: true})
      } else {
        attachSignin(document.getElementById('started'), auth2);
      }
    }
    setAuth2();
  }, []);

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log(googleUser, "User")
        updateUser(googleUser);
        console.log("Connected")
        navigate('/home',{replace: true})
      }, (error) => {
        console.log(JSON.stringify(error))
      });
  };


  const updateUser = (user) => {
    console.log(user);
    setUser(user)
    setAccessToken(user.xc.access_token)
  }
  return (

    <main className='flex items-center justify-center h-screen ml-[150px]'>
      <div>
        <div className='flex items-center justify-center mb-4'>
          <img src={logo2} alt='logo' className='w-[300px] h-[100px] pb-2 mr-[55px]' />
        </div>
        <button id="started" className='w-full py-2 border border-black px-1 outline-none mb-7 flex flex-row justify-center font-bold'>Connectez vous avec Google <img src={Rectangle} className='w-[40px] ml-4' alt='Google'/></button>
      </div>
    </main>
  )
}