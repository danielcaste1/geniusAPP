import React from "react";

const PlayerButton = ({ Icon, url, text }) => {
  return (
    <button className="flex" type="button">
      <a className={`${!url ? "animate-pulse bg-slate-500" : "bg-slate-100"} flex items-center w-40 rounded-md h-8 my-2 py-1 px-2 text-slate-900`} href={url}>
        {url ? <Icon className="mx-2"></Icon> : "" }
        {url ? text : "" }
      </a>
    </button>
  );
};

export default PlayerButton;
