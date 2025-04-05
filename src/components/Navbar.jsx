import React from "react";
import JeanLogo from "../assets/Jean1.png";

const Navbar = () => {
	return (
		<div className="nb-c w-full h-16 md:h-20 flex items-center justify-between">
			<div className="nb-l flex items-center gap-4 text-2xl font-bold">
				<img src={JeanLogo} alt="Logo" className="nb-li w-auto h-8" />
				<span>Jean's Journal</span>
			</div>
			<div className="nb-m md:hidden">M</div>
			<div className="nb-d hidden md:flex">D</div>
		</div>
	);
};

export default Navbar;
