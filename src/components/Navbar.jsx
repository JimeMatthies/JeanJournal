import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloudinaryImage from "../utilities/CloudinaryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex h-16 w-full items-center justify-between md:h-20">
      {/* Navbar Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <CloudinaryImage
          publicId={"Jean_Logo_Fondo_obir7f.png"}
          alt={"Logo"}
          tailwind={"size-12 md:size-16 object-cover"}
        />
        <span>Jean's Journal</span>
      </Link>
      {/* Mobile Menu*/}
      <div className="md:hidden">
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
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/about">About</Link>
          <Link to="/jaja">
            <button className="bg-jean-600 rounded-3xl px-4 py-2 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop Menu*/}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/about">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-jean-600 rounded-3xl px-4 py-2 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
