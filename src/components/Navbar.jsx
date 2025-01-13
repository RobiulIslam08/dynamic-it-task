import { FiPhone } from "react-icons/fi";
import { LuMailCheck } from "react-icons/lu";

import { Link } from "react-router-dom";



const Navbar = () => {
	return (
		<div className=" ">
			{/* navbar first part  */}
			<nav className="flex justify-between py-3 px-4 md:px-24 bg-[#222222] ">
				<div className="flex items-center gap-5 md:gap-2">
					<p className="text-white font-fontRoboto text-xs hidden md:flex">Contact us:</p>

					<FiPhone className="text-[#de1919] text-[30px]" />
					<p className="text-[#ababab] font-fontRoboto text-xs hidden md:flex">01964121744</p>


					<LuMailCheck className="text-[#de1919] text-[30px]" />
					<p className="text-[#ababab] font-fontRoboto text-xs hidden md:flex">dynamicit20@gmail.com</p>

				</div>
				<div>
					<Link className="hover:underline text-[#ababab] text-xs">Login</Link>
				</div>
			</nav>




			{/* navbar second part  */}
			Navbar 2nd
		</div>
	);
};

export default Navbar;