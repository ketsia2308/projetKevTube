import React, { useEffect } from 'react'
import { gapi, loadAuth2 } from 'gapi-script'
import { useNavigate } from 'react-router-dom'
import { clientId } from '../config'
const Login = () => {
const navigate = useNavigate()
useEffect(() => {
  const setAuth2 = async () => {
    const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
    if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())
    } else {
        attachSignin(document.getElementById('started'), auth2);
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
const updateUser= (user)=>{
console.log(user);
navigate('/home', )
}
  return (
    <>
     <main className='signcontainer'>
        <div className="center-items">
            <img src='' alt="" />
            <h1>SmartView</h1>
           <div id="started" onClick={attachSignin}>
            Sign in with Google
           </div>
        </div>
     </main>
    </>
  )
}
export default Login