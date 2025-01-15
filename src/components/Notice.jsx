

// const Notice = () => {
// 	return (
// 		<div className="relative h-screen bg-cover bg-center bg-[url('https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg')] px-6 md:px-24 py-6 md:py-24">
// 			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
// 			<div className="relative">
// 				{/*  heading text */}
// 				<div>
// 					<h1 className=" text-white text-4xl font-bold z-10 font-fontRobotoSlab mb-2">Notice</h1>
// 					<p className="text-[#c84f4f] font-fontRoboto mb-5">Education news all over the world.</p>
// 				</div>
// 				{/* card */}

import { FaExternalLinkAlt } from "react-icons/fa";


// 				<div className="grid grid-col-4">
// 					<div className="w-[250px]">
// 						{/* date */}
// 						<p className="bg-[#ffb606] py-1 w-[200px] px-4 text-xs mx-auto mb-4">
// 							AS Rony - December 28, 2024
// 						</p>
// 						<p className="text-white font-fontRoboto text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam</p>
// 					</div>
// 					<div className="w-[250px] relative">
// 						<img src="https://ditibd.com/wp-content/uploads/elementor/thumbs/courses-19-qyxufex8mdiib8jfh20sqycwrvhyllj6b6lnc24fi4.jpg" alt="" />
// 						<p className="bg-[#ffb606] py-1 w-[160px] px-4 text-xs mb-4 absolute -mt-2 ml-12">
// 							AS Rony - May 28, 2024
// 						</p>
// 						<p className="mt-8 text-white font-fontRoboto text-center">EducationWP</p>
// 					</div>
// 					<div className="w-[250px]">
// 						{/* date */}
// 						<p className="bg-[#ffb606] py-1 w-[200px] px-4 text-xs mx-auto mb-4">
// 							AS Rony - December 28, 2024
// 						</p>
// 						<p className="text-white font-fontRoboto text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam</p>
// 					</div>
// 					<div className="w-[250px] relative">
// 						<img src="https://ditibd.com/wp-content/uploads/elementor/thumbs/courses-19-qyxufex8mdiib8jfh20sqycwrvhyllj6b6lnc24fi4.jpg" alt="" />
// 						<p className="bg-[#ffb606] py-1 w-[160px] px-4 text-xs mb-4 absolute -mt-2 ml-12">
// 							AS Rony - May 28, 2024
// 						</p>
// 						<p className="mt-8 text-white font-fontRoboto text-center">EducationWP</p>
// 					</div>
// 				</div>

// 			</div>

// 		</div>

// 	);
// };

// export default Notice;

const Notice = () => {
	return (
		<div className="relative  bg-cover bg-center bg-[url('https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg')] px-6 md:px-24 py-6 md:py-24">
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="relative">
				{/* Heading Text */}
				<div>
					<h1 className="text-white text-4xl font-bold z-10 font-fontRobotoSlab mb-2">Notice</h1>
					<p className="text-[#c84f4f] font-fontRoboto mb-5">Education news all over the world.</p>
				</div>
				{/* Card */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					<div className="w-[250px]">
						{/* Date */}
						<p className="bg-[#ffb606] py-1 w-[200px] px-4 text-xs mx-auto mb-4">
							AS Rony - December 28, 2024
						</p>
						<p className="text-white font-fontRoboto text-sm text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						</p>
					</div>
					<div className="w-[250px] relative group ">
						<img
							className="group-hover:opacity-60 transition duration-200 ease-in"
							src="https://ditibd.com/wp-content/uploads/elementor/thumbs/courses-19-qyxufex8mdiib8jfh20sqycwrvhyllj6b6lnc24fi4.jpg"
							alt=""
						/>
						<p className="bg-[#ffb606] py-1 w-[160px] px-4 text-xs mb-4 absolute -mt-2 ml-12">
							AS Rony - May 28, 2024
						</p>
						<p className="mt-8 text-white font-fontRoboto text-center">EducationWP</p>
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
							<FaExternalLinkAlt className="text-white text-2xl  transition duration-200 ease-in" />
						</div>
					</div>
					<div className="w-[250px]">
						{/* Date */}
						<p className="bg-[#ffb606] py-1 w-[200px] px-4 text-xs mx-auto mb-4">
							AS Rony - December 28, 2024
						</p>
						<p className="text-white font-fontRoboto text-sm text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						</p>
					</div>
					<div className="w-[250px] relative group">
						<img
						className="group-hover:opacity-60 transition duration-200 ease-in"
							src="https://ditibd.com/wp-content/uploads/elementor/thumbs/courses-6-qyxugen3u2vekf3johgmdpcfcilwq3gz43e3kkngxo.jpg"
							alt=""
						/>
						<p className="bg-[#ffb606] py-1 w-[160px] px-4 text-xs mb-4 absolute -mt-2 ml-12">
							AS Rony - May 28, 2024
						</p>
						<p className="mt-8 text-white font-fontRoboto text-center">EducationWP</p>
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
							<FaExternalLinkAlt className="text-white text-2xl  transition duration-200 ease-in" />
						</div>
					</div>
					<div className="w-[250px] relative group">
						<img
						className="group-hover:opacity-60 transition duration-200 ease-in"
							src="https://ditibd.com/wp-content/uploads/elementor/thumbs/blog-12-qyxugcrfgestx769zgnd8pti5qv6ap9ifu34m0q9a4.jpg"
							alt=""
						/>
						<p className="bg-[#ffb606] py-1 w-[160px] px-4 text-xs mb-4 absolute -mt-2 ml-12">
							AS Rony - May 28, 2024
						</p>
						<p className="mt-8 text-white font-fontRoboto text-center">EducationWP</p>
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
							<FaExternalLinkAlt className="text-white text-2xl  transition duration-200 ease-in" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notice;
