import { FiPhone } from "react-icons/fi";
import { LuMailCheck } from "react-icons/lu";

import { Link } from "react-router-dom";





import { useState } from "react";

// react icons

import { IoIosArrowDown } from "react-icons/io";

import { CiMenuFries } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";



const ResponsiveNavbar = () => {

	const [aboutHover, setAboutHover] = useState(false)
	const [serviceHover, setServiceHover] = useState(false)
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
	const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
	const [mobileServiceOpen, setMobileServiceOpen] = useState(false)

	return (
		<div className=" ">
			{/*  first nav part */}
			<nav className="flex justify-between py-3 px-4 md:px-24 bg-[#222222]  ">
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

			{/* 2nd nav part */}
			<nav className="flex items-center  justify-between max-w-full px-4 md:px-24 pr-0 relative h-auto bg-[#47e549] font-fontRoboto  overflow-x-clip ">
				<img src="https://ditibd.com/wp-content/uploads/2024/12/315330483_609680960906810_2894060131005582895_n.jpg" alt="logo" className="w-[50px] py-2 " />
				<ul className="items-center justify-between gap-[40px] text-[1rem] text-[#413f3f] lg:flex hidden ">
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize bold ">Home</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">About Us</li>
					<li className=" transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize flex items-center gap-[3px] group relative"
						onMouseOver={() => setAboutHover(true)}
						onMouseLeave={() => setAboutHover(false)}>
						Course
						<MdKeyboardArrowDown
							className=" text-[1.5rem] text-[#424242] group-hover:text-[#ffb606] transition-all duration-500 group-hover:rotate-[180deg]" />

						<article
							className=" p-6 bg-white  boxShadow w-[350px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

							<div className="">
								<ul className="flex flex-col gap-[7px] text-[#424242]">
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300" >

										<div className="flex justify-between w-72 items-center">
											<p>Under BTEB 3/6 Month </p>
											<MdKeyboardArrowRight />
										</div>
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

										<div className="flex justify-between w-72 items-center">
											<p>Under NSADA Lavel 3 </p>
											<MdKeyboardArrowRight />
										</div>
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

										<div className="flex justify-between w-72 items-center">
											<p>FREELANCING COURSE</p>
											<MdKeyboardArrowRight />
										</div>
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

										<div className="flex justify-between w-72 items-center">
											<p>Programming</p>
											<MdKeyboardArrowRight />
										</div>
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

										<div className="flex justify-between w-72 items-center">
											<p>One Year Advanced Certificate Course</p>
											<MdKeyboardArrowRight />
										</div>
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">


										<p>HSC ICT Academic Course </p>

									</li>
								</ul>


							</div>

						</article>
					</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize group relative flex items-center gap-[3px]"
						onMouseOver={() => setServiceHover(true)}
						onMouseLeave={() => setServiceHover(false)}>
						Our Achievement
						<MdKeyboardArrowDown
							className="text-[1.5rem] text-[#424242] group-hover:text-[#ffb606] transition-all duration-500 group-hover:rotate-[180deg]" />


						<article
							className="p-6 bg-white boxShadow w-[300px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

							<div className="grid grid-cols-2">
								<ul className="flex flex-col gap-[7px] text-[#424242]">
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
										Student Gallery
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
										Success Gallery
									</li>
									<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
										Program Gallery
									</li>

								</ul>


							</div>


						</article>
					</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">Blog</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">Contact</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">Exam</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">Job Placement</li>
					<li className="transition-all duration-500 cursor-pointer hover:text-[#ffb606] capitalize">Notice</li>


				</ul>

				{/* for mobile  when click this show menu */}
				<div className="flex items-center gap-[10px] ">

					<CiMenuFries className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex mr-5"
						onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
				</div>

				<aside
					className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20 " : " translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full  transition-all duration-300 `}>
					<ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">

						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Home
						</li>
						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							About Us
						</li>

						<li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
							className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Course
							<IoIosArrowDown
								className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-gray-600 group-hover:text-[#ffb606] transition-all duration-300`} />
						</li>

						{/* course mega menu */}
						<div className={`${mobileAboutUsOpen ? "block" : "hidden"} group font-[500] ml-6`}>


							<ul className="flex flex-col gap-[7px] text-[#424242]">
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300" >

									<div className="flex justify-between w-52 items-center">
										<p>Under BTEB 3/6 Month </p>
										<MdKeyboardArrowRight />
									</div>
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

									<div className="flex justify-between w-52 items-center">
										<p>Under NSADA Lavel 3 </p>
										<MdKeyboardArrowRight />
									</div>
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

									<div className="flex justify-between w-52 items-center">
										<p>FREELANCING COURSE</p>
										<MdKeyboardArrowRight />
									</div>
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

									<div className="flex justify-between w-52 items-center">
										<p>Programming</p>
										<MdKeyboardArrowRight />
									</div>
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">

									<div className="flex justify-between w-52 items-center">
										<p>One Year Advanced </p>
										<MdKeyboardArrowRight />
									</div>
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">


									<p>HSC ICT Academic Course </p>

								</li>
							</ul>


						</div>


						<li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
							className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Our Achievement
							<IoIosArrowDown
								className={`${mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#ffb606] transition-all duration-300`} />
						</li>

						{/* 	Our Achievement mega menu */}
						<div className={`${mobileServiceOpen ? "hidden" : "block"} font-[500] ml-6`}>


							<ul className="flex flex-col gap-[7px] text-[#424242]">
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
									Student Gallery
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
									Success Gallery
								</li>
								<li className="flex items-center gap-[7px] hover:text-[#ffb606] transition-all duration-300">
									Program Gallery
								</li>

							</ul>


						</div>

						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">

							Blog
						</li>
						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Contact
						</li>
						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Exam
						</li>
						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Job Placement
						</li>
						<li className="hover:text-[#ffb606] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
							Notice
						</li>
					</ul>
				</aside>
			</nav>
		</div>

	);
};

export default ResponsiveNavbar;
