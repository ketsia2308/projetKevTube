import React, { useContext } from "react";
import logo2 from "../../src/Assets/logo2.png";
import Ketsia from "../../src/Assets/KETSIA.jpeg";
import appContext from "../context";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logout from "./Logout";
import Channel from "./Channel";
import { Link } from "react-router-dom";

export default function SideBar() {
  const { user } = useContext(appContext);

  return (
// Navbar Mobile

<>
{/* <div className="w-full h-[60px] bg-black ">
    <MdMenu className="text-white"/>
    <Link path="/home">
            {" "}
            <img src={logo2} alt="Logo" className="w-[150px] h-[40px]" />
    </Link>
</div> */}
<div className="w-[350px] h-[100vh] overflow-y-scroll scrollbar-none bg-[#60A5FA] rounded-r-2xl fixed">
      <div className="px-[22px] py-4">
        <div className="flex items-center justify-between z-50">
          <Link path="/home">
            {" "}
            <img src={logo2} alt="Logo" className="w-[150px] h-[40px]" />
          </Link>
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
              <div>
                <Logout />
                <div className="mt-4">
                  <Link to="/home">Accueil</Link>
                </div>
              </div>
            </Popup>
          </div>
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
