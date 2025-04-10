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
          to="/posts?cat=games"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Games
        </Link>
        <Link
          to="/posts?cat=movies"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Movies
        </Link>
        <Link
          to="/posts?cat=series"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Series
        </Link>
        <Link
          to="/posts?cat=youtube"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Youtube
        </Link>
        <Link
          to="/posts?cat=sports"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Sports
        </Link>
        <Link
          to="/posts?cat=food"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Food
        </Link>
        <Link
          to="/posts?cat=jean"
          className="hover:bg-star-300 rounded-full px-4 py-2 font-mono"
        >
          Jean
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default Categories;
