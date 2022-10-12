import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Title from "../Components/Title";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-2xl py-10 m-10 shadow-lg shadow-slate-900/50 bg-slate-900/50">
      <Title title="Welcome to GeniusApp"/>
      <p className=" w-1/2 text-center font-light text-slate-50 text-md">
        {
          "Find the lyrics of your favorite songs!"
        }
      </p>
      <p className="flex justify-center items-center my-1 w-1/2 text-center font-light text-slate-200/50 text-md">
        Start exploring in the <AiOutlineSearch className="mx-1" /> section
      </p>
    </div>
  );
};

export default Home;
