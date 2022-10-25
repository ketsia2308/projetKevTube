import axios from "axios";
import React, { useContext, useState } from "react";
import appContext from "../context";
import { apiKey } from "../config";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const { searchResult, setSearchResult, accessToken } = useContext(appContext);
  const searchSubmitted = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchText}&safeSearch=none&key=${apiKey}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(result.data.items);
    setSearchResult(result.data.items);
  };

  return (
    <form onSubmit={searchSubmitted} className="w-full p-0 m-0">
      <div className="mt-[30px] w-[90%] lg:w-[80%] lg:mx-[10%] mx-[5%]">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=" w-full border border-black px-10 py-1.5 text-sm font-light placeholder-gray-500"
          placeholder="Recherche"
        />
      </div>
      {searchResult.length > 0 && (
        <div className="mt-[30px] w-[80%] mx-[10%]">
          <button onClick={() => setSearchResult([])} className="bg-sky-500 px-4 py-2 text-white">
            Annuler la recherche
          </button>
        </div>
      )}
    </form>
  );
}
