import React from "react";
import GeniusIcon from "../assets/genius_icon.png";
import {AiFillHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"

const Header = () => {
  return (
    <header className="flex flex-col bg-slate-900 py-3 m-0  sticky top-0 min-h-screen h-full w-64 z-10">
      <a href="/" className="logo  flex justify-center items-center py-2 my-5">
        <div className="overflow-hidden rounded-full mx-2">
          <img className="w-10" src={GeniusIcon} alt="genius" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-200 mx-2">
            Genius API
          </h1>
          <span className="text-sm font-light text-slate-400 mx-2">
            This is react app
          </span>
        </div>
      </a>
      <div className="links">
        <ul className="flex flex-col items-center">
          <li className="flex w-full">
            
            <a
              href="/"
              className="flex items-center justify-center  text-xl py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
            >
              <AiFillHome className="mx-3"/>
              Home
            </a>
          </li>
          <li className="flex w-full">
            <a
              href="/"
              className="flex items-center justify-center text-xl py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
            >
              <AiOutlineSearch className="mx-3"/>
              Search
            </a>
          </li>
          <li className="flex w-full">
            <a
              href="/"
              className="flex items-center justify-center text-xl py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
            >
              <AiOutlineStar className="mx-3"/>
              About
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
