import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Categories = () => {
  return (
    <div className="hidden items-center justify-center gap-8 rounded-3xl bg-white p-4 shadow-xl/20 md:flex xl:rounded-full">
      {/* Links */}
      <div className="flex flex-1 flex-wrap items-center justify-between">
        <Link
          to="/posts"
          className="bg-jean-600 rounded-full px-4 py-2 font-mono text-white"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=music"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Music
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default Categories;
