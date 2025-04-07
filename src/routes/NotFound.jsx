import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to={"/"}>
        <button className="rounded-3xl bg-emerald-600 px-4 py-2 text-white">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
