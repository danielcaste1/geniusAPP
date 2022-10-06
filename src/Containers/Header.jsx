import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import GeniusIcon from "../assets/genius_icon.png";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex flex-col bg-slate-900 py-3 m-0  sticky top-0 h-screen  w-80 z-10">
        <a
          href="/"
          className="logo  flex justify-center items-center py-2 my-5"
        >
          <div className="overflow-hidden rounded-full mx-3">
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
              <Link
                to="/"
                className="flex items-center justify-center  text-xl  py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
              >
                <AiFillHome className="text-3xl mx-3" />
                Home
              </Link>
            </li>
            <li className="flex w-full">
              <Link
                to="/search"
                className="flex items-center justify-center text-xl  py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
              >
                <AiOutlineSearch className="text-3xl mx-3" />
                Search
              </Link>
            </li>
            <li className="flex w-full">
              <Link
                to="/favorites"
                className="flex items-center justify-center text-xl  py-4 text-center font-semibold text-slate-200 hover:bg-slate-50/10 w-full "
              >
                <AiOutlineStar className="text-3xl mx-3" />
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </header>
  );
};

export default Header;
