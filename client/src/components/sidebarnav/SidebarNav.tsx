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

const SidebarNav = () => {
  return (
    <div
      className="fixed top-2 left-0 h-screen w-16 m-0 flex flex-col
     bg-white-100 text-black-700 shadow-lg align-baseline"
    >
      <SideBarIcon icon={<TbSettings size="28" />} iconTitle={"Settings"} />
      <SideBarIcon icon={<TbCameraPlus size="28" />} iconTitle={"Media"} />
      <SideBarIcon icon={<TbMusic size="28" />} iconTitle={"Audio"} />
      <SideBarIcon icon={<TbUnderline size="28" />} iconTitle={"Sub Titles"} />
      <SideBarIcon icon={<TbNote size="28" />} iconTitle={"Notes"} />
      <SideBarIcon icon={<TbVideo size="28" />} iconTitle={"Record"} />
      <SideBarIcon icon={<TbPencil size="28" />} iconTitle={"Record"} />
      <SideBarIcon icon={<TbQuestionMark size="28" />} iconTitle={""} />
    </div>
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
