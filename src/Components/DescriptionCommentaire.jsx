import React from "react";
import Ketsia from "../../src/Assets/KETSIA.jpeg";

export default function Description({description}) {
  return (
    <div className="flex gap-4 mt-5">
      <div className="flex gap-5">
        <img
          src={Ketsia}
          alt="Ketsia"
          className="w-[40px] object-cover h-[40px] rounded-full"
        />
      </div>
      <div>
        <div className="flex items-center gap-5 w-[100%]">
          <p>
            <b>Ketsia Makasa</b>
          </p>
          <p>
            <b>-Il y a 2 heures</b>
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
