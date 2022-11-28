import React, { useContext } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import appContext from "../context";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";

export default function Video() {
  const { playId, isVideoPlayed } = useContext(appContext);
  const [loading, setLoading] = useState(true);
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true)
  }, [playId]);

  return (
    <>
      {playId && (
        <>
        <ClipLoader
          color="gray"
          loading={loading}
          size={150}
          aria-label="Chargement..."
        />
        <div className={`rounded-2xl relative mt-[30px] w-[90%] lg:w-[80%] ${loading ? 'h-[30px]' : 'h-[300px]'}`}>
          <YouTube
            videoId={playId}
            opts={opts}
            alt="Balmain"
            className="w-[100%] lg:h-[300px]"
            onReady={onReady}
            loading="lazy"
          />
        </div>
        </> 
      )}
    </>
  );
}
