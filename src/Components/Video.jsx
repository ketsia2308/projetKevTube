import React, { useContext } from "react";
import YouTube from "react-youtube";
import appContext from "../context";

export default function Video() {
  const { playId } = useContext(appContext);
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      {playId && (
        <div className="rounded-2xl relative mt-[30px] w-[90%] lg:w-[80%] h-[300px]">
          <YouTube
            videoId={playId}
            opts={opts}
            alt="Balmain"
            className="w-[100%] lg:h-[300px]"
          />
        </div>
      )}
    </>
  );
}
