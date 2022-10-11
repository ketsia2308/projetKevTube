import React,{useState,useEffect,useContext} from 'react'
import CardItem from './CardItem'
import appContext from '../context';
import { clientId } from '../config';
import axios from 'axios'

export default function CardList() {
  const {accessToken} = useContext(appContext);
  const [data,setData] = useState([]);

  const apiKey = 'AIzaSyBBuDWEzJpb2ShphmvXfVcsD3ei1Jj-gvE'

  useEffect(() =>{
    const fetchData = async () =>{
      console.log(accessToken)
      const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=45&myRating=like&key=${apiKey}`, {headers: {Authorization:`Bearer ${accessToken}`}})
        console.log(result.data);
        setData(result.data.items);
    }
    fetchData();
  },[accessToken])

  return (
    <div>
        <div className='bg-white m-auto w-full pt-[40px] h-[240px]'>
        <div className='flex justify-around flex-wrap'>
          {
            data.map(item => (
            <CardItem videoId={item.id} title={item.snippet.localized.title} image={item.snippet.thumbnails.default.url} channel={item.snippet.channelTitle}/>
            ))}
        </div>
        </div>
    </div>
  )
}
