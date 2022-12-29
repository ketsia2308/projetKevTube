import axios from "axios";
import React from "react";
import { useState } from "react";
import {
  AiOutlineLike,
  // AiOutlineDislike,
  AiFillLike,
  // AiFillDislike,
} from "react-icons/ai";

export default function Description({
  comment_id,
  description,
  profile,
  first_name,
  last_name,
  likes,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const like = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user._id;
    console.log(user_id, comment_id);

    const data = {
      user_id,
      comment_id,
    };

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_URL_SERVER}/comments/like/`,
      data: data,
    })
      .then((res) => {
        setLikesCount((current) => current + 1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex gap-4 mt-5">
      <div className="flex gap-5">
        <img
          src={profile}
          alt={first_name}
          className="w-[40px] object-cover h-[40px] rounded-full"
        />
      </div>
      <div>
        <div className="flex items-center gap-5 w-[100%]">
          <p>
            <b>
              {first_name} {last_name}
            </b>
          </p>
          <p>
            <b>-Il y a 2 heures</b>
          </p>
        </div>
        <p>{description}</p>
        <div className="flex gap-8">
          <div className="flex gap-1">
            <AiOutlineLike onClick={like} />
            {likesCount}
            {/* <AiOutlineDislike /> */}
          </div>
          <div className="flex gap-1">
            <AiFillLike />
            {/* <AiFillDislike /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
