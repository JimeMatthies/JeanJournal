import React, { useState } from "react";
import JeanLogo from "../assets/Jean1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex h-16 w-full items-center justify-between md:h-20">
      {/* Navbar Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src={JeanLogo} alt="Logo" className="h-8 w-auto" />
        <span>Jean's Journal</span>
      </div>
      {/* Mobile Menu*/}
      <div className="navbar-mobile md:hidden">
        {/* Mobile Button */}
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-8 w-8" />
        </div>
        {/* Mobile Link List */}
        <div
          className={`absolute top-16 flex h-screen w-full flex-col items-center justify-center gap-8 text-lg font-medium transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="rounded-3xl bg-emerald-600 px-4 py-2 text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="rounded-3xl bg-emerald-600 px-4 py-2 text-white">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
