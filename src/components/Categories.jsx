import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="hidden items-center justify-center gap-8 rounded-3xl bg-white p-4 shadow-lg md:flex xl:rounded-full">
      {/* Links */}
      <div className="flex flex-1 flex-wrap items-center justify-between">
        <Link
          to="/posts"
          className="bg-jean-600 rounded-full px-4 py-2 text-white"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-jean-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-jean-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-jean-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-jean-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-jean-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div>Search</div>
    </div>
  );
};

export default Categories;
