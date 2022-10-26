import React, { useState, useEffect, useContext } from "react";
import CardItem from "./CardItem";
import appContext from "../context";
import { clientId, apiKey } from "../config";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function CardList() {
  const { accessToken, searchResult, playId } = useContext(appContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(accessToken);
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=45&myRating=like&key=${apiKey}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(result.data);
      setData(result.data.items);
      setLoading(false);
    };
    fetchData();
  }, [accessToken]);

  return (
    <div className={`w-[80%] ${playId ? "pt-[130px]":"pt-[30px]"} flex justify-center h-[240px]`}>
      <div className="flex justify-between flex-wrap">
        <ClipLoader
          color="gray"
          loading={loading}
          size={150}
          aria-label="Chargement..."
        />
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
              videoId={item.id}
              title={item.snippet.localized.title}
              image={item.snippet.thumbnails.default.url}
              channel={item.snippet.channelTitle}
            />
          ))}
      </div>
    </div>
  );
}
