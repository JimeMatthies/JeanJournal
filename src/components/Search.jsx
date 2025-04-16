import React from "react";

const Search = () => {
  return (
    <div className="relative flex items-center justify-center rounded-full shadow-lg duration-300 hover:shadow-xl">
      <input
        className="ring-star-400 rounded-full bg-gray-50 px-4 py-1 font-mono text-zinc-600 shadow-md ring-1 duration-300 outline-none placeholder:text-zinc-600 placeholder:opacity-80 focus:shadow-md focus:ring-2 focus:shadow-emerald-400 focus:ring-emerald-400"
        autoComplete="off"
        placeholder="Search Post..."
        type="text"
      />
      <button className="text-star-600 absolute right-1 h-10 w-10 p-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
          ></path>{" "}
        </svg>
      </button>
    </div>
  );
};

export default Search;
