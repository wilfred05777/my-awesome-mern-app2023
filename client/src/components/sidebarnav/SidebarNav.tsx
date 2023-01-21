import React from "react";
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
import Settings from "../../screens/settings/Settings";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <div
        className="fixed top-2 left-0 h-screen w-16 m-0 flex flex-col
     bg-white-100 text-black-700 shadow-lg align-baseline"
      >
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

const SideBarIcon = ({ icon, iconTitle }: { icon: any; iconTitle: any }) => {
  return (
    <>
      <div className="sidebar-icon">{icon}</div>
      <span className="sidebar-text">{iconTitle}</span>
    </>
  );
};
export default SidebarNav;
