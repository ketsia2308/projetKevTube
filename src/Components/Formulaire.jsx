import React, { useEffect , useContext} from 'react'
import logo2 from '../../src/Assets/logo2.png'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate, Navigate } from 'react-router-dom';
import appContext from '../context';
import { clientId } from '../config';
import Google from '../../src/Assets/google.png';
import axios from 'axios';

export default function Formulaire() {
  const { setUser, setAccessToken} = useContext(appContext);
  const navigate = useNavigate()
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
      console.log(auth2.isSignedIn.get(), auth2)
      if (auth2.isSignedIn.get()) {
        const user = auth2.currentUser.get()
        updateUser(user)
        console.log("Connecte")
        console.log({user:auth2.currentUser.get().wt.cu});
         //TODO(Faire)
        //Fetch un user sur base de l'email.
        //Si l'utilisateur n'existe pas,
        //On crée un nouvel utilisateur,
        //Si non, on connecte l'utilisateur avec son email.

        axios({
          method : "POST",
          url: `${process.env.REACT_APP_URL_SERVER}/users/create`,
          data: user.wt
        }).then((response) => console.log(response))
          .catch((err) => console.log(err))
          .finally(() => console.log("terminééééééééééééééééééééééééééééééééééééééé"))

        console.log("ddddddddddddddddd", user.wt)
        navigate('/home',{replace: true})
      } else {
        attachSignin(document.getElementById('started'), auth2);
      }
    }
    setAuth2();
  }, []);

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      async   (googleUser) => {
        console.log(googleUser, "User")
        updateUser(googleUser);
        console.log("Connected")
        console.log({user: googleUser});
        const isUser = await fetchUser(auth2.cu)
        console.log({isUser})
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

    <main className='flex items-center justify-center h-screen w-screen lg:w-[50%]'>
      <div>
        <div className='flex items-center justify-center mb-4'>
          <img src={logo2} alt='logo' className='h-[80px] lg:w-[300px] lg:h-[100px] pb-2' />
        </div>
        <button onClick={attachSignin} id="started" className='w-full py-2 border border-black px-1 outline-none mb-7 flex flex-row justify-center items-center font-bold'>Se connecter avec Google <img src={Google} className='w-[40px] ml-4' alt='Google'/></button>
      </div>
    </main>
  )
}
const fetchUser = async(cu) => {
  const response = await axios.get(`http://localhost:5000/user/${cu}`);
  return response || undefined;

}