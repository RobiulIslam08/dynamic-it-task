import { GiExpense } from "react-icons/gi";
import { LuMessageSquareDiff } from "react-icons/lu";
import { TbDeviceMobileQuestion } from "react-icons/tb";


const ChooseUs = () => {
	return (
		<div className="bg-[#f3f3f3] pb-20 pt-16 max-w-screen overflow-hidden">
			{/* text */}
			<div className="text-center bg-gradient-to-t from-[#22ebdf] to-[#e3e5e5] py-6 md:mx-16  mb-5">
				<h1 className="text-7xl font-bold mb-4 font-fontRobotoSlab text-[#333333] leading-snug">Why Choose Us?</h1>
				<p className="font-fontRoboto text-[#606060]">A choice that makes the difference.</p>
			</div>
			{/* card */}
			<div className="px-24 flex flex-col justify-center items-center md:flex-row gap-10 mb-14">
				<div className="bg-gradient-to-t from-[#2087fde5] to-[#fdfeff] h-80 w-[280px] md:w-[330px] flex flex-col justify-center items-center text-center px-14">
					<GiExpense className="text-7xl text-[#f5bc2b]" />
					<p className="mt-5 mb-3 font-semibold text-[#333333] text-lg font-fontRobotoSlab ">Highly Experienced</p>
					<p className="font-fontRoboto text-[#606060]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
					</p>
				</div>
				<div className="bg-gradient-to-t from-[#f22a5ce0] to-[#fdfeff] h-80 w-[280px] md:w-[330px] flex flex-col justify-center items-center text-center px-14">
					<TbDeviceMobileQuestion className="text-7xl text-[#f5bc2b]" />
					<p className="mt-5 mb-3 font-semibold text-[#333333] text-lg font-fontRobotoSlab ">Question, Quiz & Course</p>
					<p className="font-fontRoboto text-[#606060]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
					</p>
				</div>
				<div className="bg-[#a7d8b5] h-80 w-[280px] md:w-[330px] flex flex-col justify-center items-center text-center px-14">
					<LuMessageSquareDiff className="text-7xl text-[#f5bc2b]" />
					<p className="mt-5 mb-3 font-semibold text-[#333333] text-lg font-fontRobotoSlab ">24 Hours Supports</p>
					<p className="font-fontRoboto text-[#606060]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
					</p>
				</div>
			</div>
			<button className=' mx-auto bg-[#ffb606] hover:bg-[#d8a327] flex items-center justify-center mt-9 px-8 py-3 transition duration-300 ease-in-out font-fontRoboto '>LEARN MORE</button>		</div>
	);
};

export default ChooseUs;