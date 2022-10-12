import React from "react";
import { Link } from "react-router-dom";
import GeniusIcon from "../assets/genius_icon.png";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex flex-col p-3 m-0  sticky top-0 h-screen  w-80 z-10">
      <a
        href="/"
        className="logo flex justify-center items-center py-5 my-5"
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
      <div className="links ">
        <ul className="flex flex-col items-center">
          <li className="flex w-full">
            <Link
              to="/"
              className="flex items-center justify-start text-xl font-semibold text-slate-200 hover:bg-slate-900/100 w-full py-5 my-2 rounded-2xl shadow-lg shadow-slate-900/50 bg-slate-900/50 "
            >
              <AiFillHome className="text-3xl mx-3" />
              Home
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              to="/search"
              className="flex items-center justify-start text-xl font-semibold text-slate-200 hover:bg-slate-900/100 w-full py-5 my-2 rounded-2xl shadow-lg shadow-slate-900/50 bg-slate-900/50 "
            >
              <AiOutlineSearch className="text-3xl mx-3" />
              Search
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              to="/favorites"
              className="flex items-center justify-start text-xl font-semibold text-slate-200 hover:bg-slate-900/100 w-full py-5 my-2 rounded-2xl shadow-lg shadow-slate-900/50 bg-slate-900/50 "
            >
              <AiOutlineStar className="text-3xl mx-3" />
              Favorites
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-end grow">
        <span className="text-sm font-light text-slate-200/50  w-full py-5 px-3 my-2">
          Made by{" "}
          <a
            className="hover:underline"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/danielcaste1"
          >
            danielcaste1
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
