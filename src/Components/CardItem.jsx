import React, { useContext } from "react";
import appContext from "../context";

export default function CardItem({ videoId, image, title, channel }) {
  const { playId, setPlayId } = useContext(appContext);
  const videoClicked = (e) => {
    setPlayId(videoId);
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={videoClicked}
      className="mb-5 transform transition duration-200 hover:scale-110 cursor-pointer w-full md:w-[unset]"
    >
      <div className="w-full md:w-[160px]">
        <img src={image} className="w-full" alt="Fally" />
        <div className="flex justify-between">
          <h1 className="text-black text-sm">
            <strong>{title}</strong>
            <br />
            {channel}
          </h1>
        </div>
      </div>
    </div>
  );
}
