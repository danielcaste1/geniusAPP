import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = ({queryValue, onTyping, onSearch}) => {
  return (
    <div className="flex items-center justify-between bg-slate-600  rounded-xl overflow-hidden w-fit">
      <input
        placeholder="Your song..."
        className="outline-none px-3 py-2 text-md text-slate-600"
        type="text"
        value={queryValue}
        onChange={event => onTyping(event.target.value)}
      />
      <button onClick={onSearch} className="bg-slate-600 text-slate-100 h-full" type="button">
        <AiOutlineSearch className=" mx-3" />
      </button>
    </div>
  );
};

export default SearchInput;
