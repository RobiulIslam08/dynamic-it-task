import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";


const Events = () => {
	return (
		<div className="pt-20 pb-12 px-6 md:px-24 ">
			{/* header */}
			<div className="flex justify-between items-center">
				<div>
					<p className="text-3xl font-bold font-fontRobotoSlab text-[#333333] mb-2">Events</p>
					<p className="font-fontRoboto text-[#606060]">Upcoming Education Events to feed your brain.</p>
				</div>
				<button className="border hover:border-[#ffb606] px-4 py-1 text-[#333333] font-fontRoboto">View All</button>
			</div>
			<hr className="mb-5 mt-6 text-blue-800"></hr>
			{/* card */}
			<div>
				{/* card one */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
					{/* date */}
					<div className="hidden md:flex flex-col">
						<p className="text-[#ffb606] text-6xl font-bold font-fontRoboto ">30</p>
						<p className="text-center text-[#606060]">Sep</p>
					</div>
					<div className="hidden md:flex h-20 w-1 text-[#e4c3c3] border"></div>
					{/* detaisl */}
					<div className="space-y-3">
						<h4 className="font-fontRobotoSlab text-lg hover:text-[#ffb606] transition-all duration-300 ease-in font-semibold text-[#333333]">Applying Natural Laws to Technology and Society</h4>
						<div className="flex items-center gap-4">
							<div className="flex items-center text-[#878787] gap-2">
								<CiClock2 />
								<p> 8:00 am - 5:00 pm</p>
							</div>
							<div className="flex items-center text-[#878787] gap-2">
								<IoLocationOutline />
								<p>NewYork, USA</p>
							</div>
						</div>
						<p className="text-[#606060] font-fontRoboto text-sm">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat</p>
					</div>
					<img src="https://ditibd.com/wp-content/uploads/2022/04/courses-14-450x233.jpg" alt="" />
				</div>
				{/* card two */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
					{/* date */}
					<div className="hidden md:flex flex-col">
						<p className="text-[#ffb606] text-6xl font-bold font-fontRoboto ">30</p>
						<p className="text-center text-[#606060]">Sep</p>
					</div>
					<div className="hidden md:flex h-20 w-1 text-[#e4c3c3] border"></div>
					{/* detaisl */}
					<div className="space-y-3">
						<h4 className="font-fontRobotoSlab text-lg hover:text-[#ffb606] transition-all duration-300 ease-in font-semibold text-[#333333]">Applying Natural Laws to Technology and Society</h4>
						<div className="flex items-center gap-4">
							<div className="flex items-center text-[#878787] gap-2">
								<CiClock2 />
								<p> 8:00 am - 5:00 pm</p>
							</div>
							<div className="flex items-center text-[#878787] gap-2">
								<IoLocationOutline />
								<p>NewYork, USA</p>
							</div>
						</div>
						<p className="text-[#606060] font-fontRoboto text-sm">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat</p>
					</div>
					<img src="https://ditibd.com/wp-content/uploads/2022/04/courses-14-450x233.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Events;