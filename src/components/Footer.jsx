


// react icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {

	return (
		<footer className="bg-[#111111]  w-full  sm:p-9">
			<div
				className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full px-24">
				<div className="w-full sm:w-[25%] ">
					<img src="https://ditibd.com/wp-content/uploads/2022/12/logo-edu-white.png" alt="logo"
						className="w-[150px] mb-[20px]" />
					<div className="flex flex-col gap-[20px] text-primary">
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer text-[#999999]">
							<IoLocationOutline className="text-[1.2rem]" />
							Kulaura, Moulvibazar, Sylhet
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer text-[#999999]">
							<MdOutlineEmail className="text-[1.1rem] " />
							zenuilibrary@gmail.com
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer text-[#999999]">
							<MdOutlineLocalPhone className="text-[1.1rem] " />
							+8801305282768
						</a></span>
					</div>
				</div>

				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Services</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">UI
							Components</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Website
							Templates</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Icons</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Opacity
							Palette</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Blocks</p>
					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Company</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Features</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Our
							Team</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Portfolio</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Blog</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Contact
							Us</p>
					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Our Social Media</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Dribbble</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Behance</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Medium</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Instagram</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Facebook</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Twitter</p>
					</div>
				</div>


			</div>
		</footer>
	);
};

export default Footer;
