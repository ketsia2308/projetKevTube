import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { gapi, loadAuth2 } from 'gapi-script'
const Logout = () => {
  const retour = useNavigate()
    const clientId = '422670866849-13bacjlhtmgpmuuhm0s0rj6ga4s7qj0f.apps.googleusercontent.com'
// useEffect(() => {
//   const setAuth2 = async () => {
//     const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube.force-ssl')
//     if (auth2.isSignedIn.get()) {
//         console.log(auth2.currentUser.get())
//     }
//   }
//   setAuth2();
// }, []);

    const signOut = () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        retour('/', {replace: true})
        console.log('User signed out.');
      });
    }
  return (
    <>
      <div id="btn-logout" onClick={signOut}>Sign out with Google</div>
    </>
  )
}
export default Logout