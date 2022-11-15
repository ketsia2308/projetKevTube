import axios from "axios";
import React, { useContext, useState } from "react";
import appContext from "../context";
import { apiKey } from "../config";
import { MdSearch } from "react-icons/md";
import { ClipLoader } from "react-spinners";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { searchResult, setSearchResult, accessToken } = useContext(appContext);
  const searchSubmitted = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchText}&safeSearch=none&key=${apiKey}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(result.data.items);
    setSearchResult(result.data.items);
    setIsSearching(false);
  };

  return (
    <form onSubmit={searchSubmitted} className="w-full p-0 m-0">
      <div className="lg:mt-[30px] mt-[90px] w-[90%] lg:w-[80%] lg:mx-[10%] mx-[5%]">
        <div className=" border flex items-center ">
          <button type="submit">
            <MdSearch className="ml-[10px] text-gray-500" />
          </button>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className=" w-full px-3 py-1.5 text-sm focus:outline-none font-light placeholder-gray-500"
            placeholder="Recherche"
          />
        </div>
        <div className="flex justify-center">
        <ClipLoader
          color="gray"
          loading={isSearching}
          size={150}
          aria-label="Chargement..."
        />
        </div>
      </div>
      {searchResult.length > 0 && (
        <div className="mt-[30px] w-[80%] mx-[10%]">
          <button
            onClick={() => {
              setSearchResult([]);
              setSearchText("");
            }}
            className="bg-sky-500 px-4 py-2 text-white"
          >
            Annuler la recherche
          </button>
        </div>
      )}
    </form>
  );
}
