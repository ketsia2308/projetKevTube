import React, { useContext, useEffect, useState } from "react";
import logo2 from "../../src/Assets/logo2.png";
import Ketsia from "../../src/Assets/KETSIA.jpeg";
import appContext from "../context";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logout from "./Logout";
import Channel from "./Channel";
import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";

export default function SideBar({ openSideBar, setOpenSideBar}) {
  const { user } = useContext(appContext);

  const location = useLocation()

  useEffect(() => {
    setOpenSideBar(false)
  }, [location, setOpenSideBar])
  
  return (
    // Navbar Mobile

    <>
      <div
        className={`z-[100] w-[75vw] lg:w-[25vw] h-[100vh] overflow-y-scroll scrollbar-none bg-[#60A5FA] lg:rounded-r-2xl fixed transition ease-linear duration-300 transform ${
          openSideBar ? "translate-x-0" : "translate-x-[-100%]"
        } lg:translate-x-0`}
      >
        <div className="px-[22px] py-4">
          <div className="flex items-center justify-between z-50">
            <Link path="/home">
              {" "}
              <img src={logo2} alt="Logo" className="w-[150px] h-[40px]" />
            </Link>
            <HeaderMobile user={user} />
          </div>
        </div>
        <h1 className="text-[25px] text-left pt-[2  0px] pl-6 pb-10 text-white">
          <strong>Abonnements</strong>
        </h1>
        <Channel />
      </div>
    </>
  );
}

function HeaderMobile({ user }) {
  return (
    <div>
      <Popup
        trigger={
          <button>
            <img
              src={user?.wt?.hK ?? Ketsia}
              alt="Ketsia"
              className="w-[40px] h-[40px] rounded-full mt-3"
            />
          </button>
        }
        position="right center"
      >
        <div className="z-[10000]">
          <Logout />
          <div className="mt-4">
            <Link to="/home">Accueil</Link>
          </div>
        </div>
      </Popup>
    </div>
  );
}
