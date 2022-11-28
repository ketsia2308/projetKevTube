import React, { useContext, useEffect } from "react";
import logo2 from "../../src/Assets/logo2.png";
import Ketsia from "../../src/Assets/KETSIA.jpeg";
import appContext from "../context";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logout from "./Logout";
import Channel from "./Channel";
import { Link, useLocation } from "react-router-dom";
import usePopup from "../Popup/usePopUp";
import Modal from "../Popup/Modal";
import { FaFacebookSquare, FaInstagram, FaRegBell } from "react-icons/fa";
import {MdAddAPhoto} from "react-icons/md";

export default function SideBar({ openSideBar, setOpenSideBar }) {
  const { user } = useContext(appContext);
  const location = useLocation();

  useEffect(() => {
    setOpenSideBar(false);
  }, [location, setOpenSideBar]);

  return (
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
  const { isAffiching: isLoginFormShowed, Showing: toggleLoginForm } =
    usePopup();
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
          <div className="mt-2">
            <Link to="/home">Accueil</Link>
          </div>
        </div>
        <div>
          <button className="mt-2" onClick={toggleLoginForm}>
            Modifier votre profil
          </button>
          <Modal isAffiching={isLoginFormShowed} hide={toggleLoginForm}>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="relative ">
                  <img
                    src={user?.wt?.hK ?? Ketsia}
                    alt="Ketsia"
                    className="w-[100px] h-[100px] rounded-full mb-2"
                  />
                    <MdAddAPhoto className="text-[50px] absolute bottom-0 -right-4"/>
                </div>
                <div className="border-b-2 border-black h-[2px] w-[85%] mx-[7.5%]"></div>
                <p className="mb-2">Ketsia Makasa</p>
                <p className="mb-2">+243818930200</p>
                <p className="mb-2">kevanimakasa2019@gmail.com</p>
                <div className="flex flex-col items-start mt-3">
                  <div className="flex">
                    <p className="text-[30px]">
                      <FaRegBell />
                    </p>
                    <p className="mb-3">Notifications</p>
                    <p>15</p>
                  </div>
                  <div className="flex">
                    <p className=" text-[30px]">
                      <FaFacebookSquare />
                    </p>
                    <p className="mb-3">Ketsia Makasa Kevani</p>
                  </div>
                  <div className="flex">
                    <p className="text-[30px]">
                      <FaInstagram />
                    </p>
                    <p className="mb-3">Kevanikm</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="mb-5">Parametre du compte</h1>
                <form className="mb-5">
                  <input
                    type="text"
                    placeholder="Profil"
                    className="border border-black "
                  />
                </form>
                <form className="mb-5">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="border border-black"
                  />
                </form>
                <form className="mb-5">
                  <input
                    type="text"
                    placeholder="Numéro"
                    className="border border-black"
                  />
                </form>
                <form className="mb-5">
                  <input
                    type="text"
                    placeholder="Facebook"
                    className="border border-black"
                  />
                </form>
                <form className="mb-5">
                  <input
                    type="text"
                    placeholder="Instagram"
                    className="border border-black"
                  />
                </form>
                <button className="p-2  bg-[#60A5FA] ">Mise à jour</button>
              </div>
            </div>
          </Modal>
        </div>
      </Popup>
    </div>
  );
}
