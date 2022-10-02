import React from "react";

const PageButton = ({ isDisabled, icon, onClick }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`px-2 py-1 my-3 mx-1 rounded-md font-semibold ${!isDisabled ? "text-slate-100 bg-slate-800/70 hover:bg-slate-800/100" : "text-slate-400"} `}
      type="button"
    >
      {icon}
    </button>
  );
};

export default PageButton;
