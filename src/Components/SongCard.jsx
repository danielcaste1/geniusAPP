import React from "react";

function SongCard({ title, artist, picture, onClick }) {
  return (
    <div className={`${!title ? "animate-pulse": ""} h-64 w-40 cursor-pointer flex flex-col items-center bg-slate-900/50 hover:bg-slate-900/100 rounded-sm overflow-hidden`}>
      <div className="w-full">
        <img loading="lazy" className="w-full" src={picture} alt="" />
      </div>
      <div className="mx-5 my-2">
        <p className="text-center text-md font-semibold text-slate-100">{title}</p>
        <p className="text-center text-sm text-slate-100">{artist}</p>
        {onClick ? (
          <p className="text-center text-sm text-slate-100"> call to action </p>
        ): null}
      </div>
    </div>
  );
}

export default SongCard;
