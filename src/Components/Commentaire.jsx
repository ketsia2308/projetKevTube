import React, {useState} from "react";
import Ketsia from "../../src/Assets/KETSIA.jpeg";
export default function Commentaire() {
    const [inputComment, setInputComment] = useState();
    const ajouter = (e) => {
        e.preventDefault();
        console.log(inputComment) 
    }
  return (
      <form className="flex items-center justify-between w-[80%] mt-[150px]" onSubmit={ajouter}>
        <div className="flex gap-4">
          <img
            src={Ketsia}
            alt="Ketsia"
            className="w-[40px] object-cover h-[40px] rounded-full"
          />
          <input onChange={(e) => (setInputComment(e.target.value))}
            className="focus:outline-none"
            type="text"
            placeholder="Ajouter un commentaire"
            novalidate
          ></input>
        </div>
        <div>
        <button className="bg-sky-500 py-2 px-6 text-white " type="submit">
          AJOUTER
        </button>
      </div>
      </form>
  );
}
