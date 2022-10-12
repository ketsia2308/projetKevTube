import React, { useEffect }  from 'react'
import logo2 from '../../src/Assets/logo2.png'
import Login from './Login'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate, Navigate } from 'react-router-dom';

export default function Formulaire() {
  const clientId = '422670866849-13bacjlhtmgpmuuhm0s0rj6ga4s7qj0f.apps.googleusercontent.com'
  const navigate = useNavigate()
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube.force-ssl')
      if (auth2.isSignedIn.get()) {
          updateUser(auth2.currentUser.get())
          console.log("Connected")
          navigate('/home',{replace: true})
      } else {
          attachSignin(document.getElementById('started'), auth2);
          console.log("Connected")
          navigate('/home',{replace: true})
      }
    }
    setAuth2();
  }, []);
  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        updateUser(googleUser);
 
      }, (error) => {
      console.log(JSON.stringify(error))
    });
  };
  const updateUser = (user)=>{
      console.log(user);
    
  }
  return (

   <main className='flex items-center justify-center h-screen ml-[150px]'>
        <form>
            <div className='bg-white w-96 p-6 rounded shadow-sm'>
                <div className='flex items-center justify-center mb-4'>
                  <img src={logo2} alt='logo' className='w-[300px] h-[100px] pb-6'/>
                </div>
                <button id="started" className='w-full py-2 border border-black px-1 outline-none mb-7 rounded-lg'>Connectez vous avec Google</button>
            </div>
        </form>
   </main> 
  )
}
