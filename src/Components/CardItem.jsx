import React, {useContext} from 'react'
import Fally from '../../src/Assets/Fally.jpeg'
import Ima from '../../src/Assets/Ima (copie).jpg'
import KoffiOlomode from '../../src/Assets/KoffiOlomide.jpg.jpg'
import fally from '../../src/Assets/Droit chemin (copie).jpg'
import Dadju from '../../src/Assets/Dadju.jpg'
import Kwadra from '../../src/Assets/kwadrakora.jpg'
import appContext from '../context'

export default function CardItem({ videoId,image,title,channel}) {
  const { playId, setPlayId } = useContext(appContext)
  const videoClicked = (e) => {
      setPlayId(videoId);
      window.scrollTo(0, 0);
  }
  return (
    <div onClick={videoClicked} className='mb-5'>
            <div className='w-[160px]'>
                <img src={image} className="w-full" alt='Fally'/>
               <div className='flex justify-between'>
                 <h1 className='text-black text-sm'><strong>{title}</strong><br/>{channel}</h1>
                </div>
            </div>
    </div>
  )
}
