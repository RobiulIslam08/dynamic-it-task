


// react icons
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {

	return (
		<footer className="bg-[#111111]  w-full  sm:p-9">
			<div
				className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full  px-6 md:px-24">
				<div className="w-full sm:w-[25%] ">
					<img src="https://ditibd.com/wp-content/uploads/2022/12/logo-edu-white.png" alt="logo"
						className="w-[150px] mb-[20px]" />
					<div className="flex flex-col gap-[20px] text-primary ">
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px]  cursor-pointer text-[#999999]">
							<MdOutlineLocalPhone className="text-[1.1rem] text-[#ffb606] " />
							01932-130715
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer text-[#999999]">
							<IoLocationOutline className="text-[1.2rem] text-[#ffb606]" />
							Sherpur Govt Collage, Sherpur Town, Sherpur 2100
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px]  cursor-pointer text-[#999999]">
							<MdOutlineEmail className="text-[1.1rem] text-[#ffb606] " />
							dynamicit20@gmail.com
						</a></span>

					</div>
					<div className="flex  gap-4 text-2xl text-[#e92727]  mt-4">
						<FaFacebook className="hover:text-[#de1919e2] transition-all duration-300 ease-in hover:scale-125" />
						<FaInstagram className="hover:text-[#de1919bc] transition-all duration-300 ease-in hover:scale-125" />
						<FaLinkedinIn className="hover:text-[#de1919bc] transition-all duration-300 ease-in hover:scale-125" />

					</div>
				</div>

				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff] font-fontRobotoSlab">Company</h3>
					<div className="flex text-black flex-col gap-[10px] font-fontRoboto">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">About</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Blog</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Contact</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Become a Teacher</p>

					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Links</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Course</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Shop</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">
							Events</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Gallery</p>
					
					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Support</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">FAQ</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Privacy Policy</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Terms & Conditions</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Sitemap</p>
					
					</div>
				</div>


			</div>
			<hr className="md:mx-24 mx-6 mt-6 border-gray-700" />
			<p className="text-gray-500 font-fontRoboto flex justify-center items-center pt-5 md:pt-7 pb-4 md:pb-6">Copyright © 2025 Dynamic IT Institute.</p>
		</footer>
	);
};

export default Footer;
