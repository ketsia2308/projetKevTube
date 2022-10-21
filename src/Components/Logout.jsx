import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gapi, loadAuth2 } from 'gapi-script'
import { clientId } from '../config'

const Logout = () => {
  const retour = useNavigate()
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
      if (auth2.isSignedIn.get()) {
          console.log(auth2.currentUser.get())
      }
    }
    setAuth2();
  }, []);

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      auth2.disconnect();
      retour('/', { replace: true })
      console.log('User signed out.');
    });
  }
  return (
    <>
      <div> 
        <button id="btn-logout" onClick={signOut}>Sign out </button>
      </div>
    </>
  )
}
export default Logout