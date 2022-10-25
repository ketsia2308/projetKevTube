import React, { useContext, useEffect, useState } from "react";
/* import CardItem from '../Components/CardItem' */
import CardList from "../Components/CardList";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";
import Video from "../Components/Video";
import { gapi, loadAuth2 } from "gapi-script";
import appContext from "../context";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { clientId } from "../config";
import { MdMenu } from "react-icons/md";
import logo2 from "../../src/Assets/logo2.png";

export default function Videoplayer() {
  const { setUser, setAccessToken } = useContext(appContext);

  const [openSideBar, setOpenSideBar] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        clientId,
        "https://www.googleapis.com/auth/youtube"
      );
      console.log(auth2.isSignedIn.get(), auth2);
      if (auth2.isSignedIn.get()) {
        const user = auth2.currentUser.get();
        setUser(user);
        setAccessToken(user.xc.access_token);
      } else {
        navigate("/");
      }
    };
    setAuth2();
  }, []);

  return (
    <>
      <div className="w-full h-[60px] bg-white flex flex-row justify-between px-3 pt-2 lg:hidden shadow-md">
        <MdMenu
          className="text-black"
          size={40}
          onClick={() => setOpenSideBar(!openSideBar)}
        />
        <Link path="/home" className="flex flex-col">
          {" "}
          <img src={logo2} alt="Logo" className="w-[150px] h-[40px]" />
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="lg:w-[20%]">
          <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}  />
        </div>
        <div className="lg:w-[75%] flex items-center  flex-col ">
          <SearchBar />
          <Video />
          <Outlet />
        </div>
      </div>
    </>
  );
}
