import React, {useContext} from 'react'
import Balmain from '../../src/Assets/Balmain.jpeg'
import YouTube from 'react-youtube'
import appContext from '../context'

export default function Video() {
  const {playId} = useContext(appContext);
const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
  return (
    <div className=''>
      <div className='rounded-2xl relative pt-[10px] w-[500px] h-[300px]'>
        <YouTube  videoId={playId} opts={opts}   alt='Balmain' className='w-[500px] h-[300px] rounded-2xl' />
        <div className='bg-white h-[8px] w-[95%] mx-auto absolute inset-x-0 bottom-1'>
          <p id="bar-progress"></p>
        </div>
      </div>
    </div>
  )
}
