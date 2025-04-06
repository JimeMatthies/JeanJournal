import React from "react";
import JeanLogo from "../assets/Jean1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nb-c flex h-16 w-full items-center justify-between md:h-20">
      <div className="nb-l flex items-center gap-4 text-2xl font-bold">
        <img src={JeanLogo} alt="Logo" className="nb-li h-8 w-auto" />
        <span>Jean's Journal</span>
      </div>
      <div className="nb-m md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nb-d hidden md:flex">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default Navbar;
