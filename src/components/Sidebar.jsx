// import React from 'react'
import { useLocation } from "react-router-dom";
import Logo from "../assets/emojione-monotone_soccer-ball.svg"
import Nav from "./Nav";



export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <>
    <div className="flex flex-col bg-sidebar w-[60px] items-center pt-5 text-white gap-4">
        <div className="w-[30px] h-[30px] mb-5 relative">
            <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-primary-orange rounded-full" />
            <div className="w-[26px] h-[26px] left-[2px] top-[2px] absolute bg-texts-heading rounded-full" />
            <img src={Logo} alt="Logo" className="w-7 h-7 left-[1px] top-[1px] absolute" />
        </div>
        <Nav className="flex-1" isActive={isActive}/>
    </div>
    </>
  )
}
