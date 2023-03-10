import React, {useState} from "react";
// icons react-icons
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {
  TbCameraPlus,
  TbLetterT,
  TbMusic,
  TbNote,
  TbPencil,
  TbQuestionMark,
  TbSettings,
  TbUnderline,
  TbVideo
} from "react-icons/tb";

import "./sidebarnav.scss";
import { Link } from "react-router-dom";

const SidebarNav = () => {

  const [darkToggle, setDarkToggle ] = useState(false);

  return (
    <>    
      <div
        className="fixed left-0 h-screen w-20 m-0 pt-4 flex flex-col
     bg-white-100 text-black-700 shadow-lg  "
    //  dark:bg-gray-900 dark:text-white
      >
        {/* <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label> */}

        <Link to="/settings">
          <SideBarIcon icon={<TbSettings size="28" />} iconTitle={"Settings"} />
        </Link>
        <Link to="/media">
          <SideBarIcon icon={<TbCameraPlus size="28" />} iconTitle={"Media"} />
        </Link>
        <Link to="/audio">
          <SideBarIcon icon={<TbMusic size="28" />} iconTitle={"Audio"} />
        </Link>
        <Link to="/subtitles">
          <SideBarIcon
            icon={<TbUnderline size="28" />}
            iconTitle={"SubTitles"}
          />
        </Link>
        <Link to="/notes">
          <SideBarIcon icon={<TbNote size="28" />} iconTitle={"Notes"} />
        </Link>
        <Link to="/records">
          <SideBarIcon icon={<TbVideo size="28" />} iconTitle={"Record"} />
        </Link>
        <Link to="/write">
          <SideBarIcon icon={<TbPencil size="28" />} iconTitle={"Write"} />
        </Link>
        <Link to="/question">
          <SideBarIcon icon={<TbQuestionMark size="28" />} iconTitle={""} />
        </Link>
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, iconTitle, text="Tool tip " }: { icon: any; iconTitle: any, text: any }) => {
  return (
    <>
      <div className="sidebar-icon group">{icon}

        <span className="sidebar-tooltip group-hover:scale-100">
          {text}
        </span>
      </div>
      <span className="sidebar-text">{iconTitle}</span>
    </>
  );
};

export default SidebarNav;