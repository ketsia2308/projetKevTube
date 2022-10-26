import React, {useState,useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import appContext from "../context";
import { apiKey } from "../config";
import CardItem from "./CardItem";


export default function ChannelVideoList(){

    const { accessToken, searchResult, playId} = useContext(appContext);
    const [data, setData] = useState([]);  
    const {id} = useParams();


  useEffect(() => {
    const fetchData = async () => {
      console.log(accessToken);
      const result = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&type=video&maxResults=45&key=${apiKey}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(result.data);
      setData(result.data.items);
    };
    fetchData();
  }, [accessToken, id]);

    return(
        <>
        <div className={`w-[80%] ${playId ? "pt-[130px]":"pt-[30px]"} flex justify-center h-[240px]`}>
      <div className="flex justify-between flex-wrap">
        {searchResult.length > 0 &&
          searchResult.map((item) => (
            <CardItem
              videoId={item.id.videoId}
              title={item.snippet.title}
              image={item.snippet.thumbnails.default.url}
              channel={item.snippet.channelTitle}
            />
          ))}
        {searchResult.length === 0 &&
          data.map((item) => (
            <CardItem
              videoId={item.id.videoId}
              title={item.snippet.title}
              image={item.snippet.thumbnails.default.url}
              channel={item.snippet.channelTitle}
            />
          ))}
      </div>
    </div>
        </>
    )
}