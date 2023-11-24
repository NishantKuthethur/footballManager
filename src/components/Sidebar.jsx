// import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/emojione-monotone_soccer-ball.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUsersLine } from '@fortawesome/free-solid-svg-icons';


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
        <nav className="flex-1">
            <ul className="flex flex-col items-center gap-8">
                <li className="relative">
                    <Link to="/roster" className="flex items-center justify-center h-12 w-12">
                    {isActive('/roster') && <div className="absolute left-0 ml-[3px] w-1 h-1 bg-primary-orange rounded-full" />}
                    <FontAwesomeIcon icon={faBars} className={`h-5 w-5 ${isActive('/roster') ? 'text-primary-orange' : 'text-primary-orangeMutated'}`} />
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/formation" className="flex items-center justify-center h-12 w-12">
                    {isActive('/formation') && <div className="absolute left-0 ml-[3px] w-1 h-1 bg-primary-orange rounded-full" />}
                    <FontAwesomeIcon icon={faUsersLine} className={`h-5 w-5 ${isActive('/formation') ? 'text-primary-orange' : 'text-primary-orangeMutated'}`} />
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}
