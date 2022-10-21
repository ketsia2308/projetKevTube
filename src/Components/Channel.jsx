import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import appContext from "../context";
import axios from "axios";
import { apiKey } from "../config";

export default function Channel() {
  const { accessToken } = useContext(appContext);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      console.log(accessToken);
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=34&mine=true&key=${apiKey}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(result.data);
      setChannels(result.data.items);
    };
    fetchChannels();
  }, [accessToken]);

  return (
    <>
      {channels.map((channel, index) => (
        <Link key={index}  to={`/home/channel/${channel.snippet.resourceId.channelId}`}>
          <div className="flex items-center pt-2 pb-5 pl-6">
            <img
              src={channel.snippet.thumbnails.default.url}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="ml-8 text-white">
              <strong>{channel.snippet.title}</strong>
            </p>
          </div>
          <div className="border-b-2 h-[2px] w-[85%] mx-[7.5%]"></div>
        </Link>
      ))}
    </>
  );
}
