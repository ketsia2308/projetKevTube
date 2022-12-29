import React, { useState, useContext } from "react";
import Ketsia from "../../src/Assets/KETSIA.jpeg";
import appContext from "../context";
import axios from "axios";
import { useEffect } from "react";
import Description from "./DescriptionCommentaire";

export default function Commentaire() {
  const [inputComment, setInputComment] = useState("");
  const { playId } = useContext(appContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log();
      const videoComment = await axios.get(
        `http://localhost:5000/comments/${playId}`
      );
      // console.log("commentaires", videoComment.data);
      setComments(videoComment.data);
    };
    fetchData();
  }, [playId]);

  console.log(comments);

  const comment = (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const data = {
      user_id: currentUser._id,
      video_id: playId,
      description: inputComment,
    };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_SERVER}/comments/create`,
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        setComments((current) => [
          ...current,
          {
            ...response.data,
            user_id: currentUser,
          },
        ]);
        setInputComment("");
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("terminéééééé"));
  };
  return (
    <>
      <form
        className="flex items-center justify-between w-[100%] mt-[150px]"
        onSubmit={comment}
      >
        <div className="flex gap-4">
          <img
            src={Ketsia}
            alt="Ketsia"
            className="w-[40px] object-cover h-[40px] rounded-full"
          />
          <input
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            className="focus:outline-none"
            type="text"
            placeholder="Ajouter un commentaire"
            noValidate
          ></input>
        </div>
        <div>
          <button
            onClick={comment}
            className="bg-sky-500 py-2 px-6 text-white "
            type="submit"
          >
            AJOUTER
          </button>
        </div>
      </form>
      {/* <Description/> */}
      {comments.map((item, index) => {
        console.log(item.likes);
        return (
          <Description
            comment_id={item._id}
            description={item.description}
            profile={item.user_id.profile}
            first_name={item.user_id.first_name}
            last_name={item.user_id.last_name}
            likes={item.likes.length}
            dislikes={item.dislikes.length}
          />
        );
      })}
    </>
  );
}
