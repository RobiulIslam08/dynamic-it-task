import { CgFileDocument } from "react-icons/cg";


const Card = () => {
	return (
		<div className=" h-[370px] border hover:shadow-2xl hover:border-b-orange-400 transition duration-300 ease-in">
			<img className="w-full" src="https://ditibd.com/wp-content/themes/eduma/images/demo_images/demo_image.jpg" alt="" />
			<div>
				<p className="text-center font-fontRoboto text-[15px] text-[#337ab7]">AS Rony</p>
				<p className="text-center font-fontRobotoSlab text-lg text-[#333333] mb-8">Web Developer</p>
			</div>
			<div className="flex items-center">
				<div className="flex-1 border-t border-gray-300 ml-4"></div>
				<div className="w-9 h-1 bg-yellow-500"></div>
				<div className="flex-1 border-t border-gray-300 mr-4"></div>
			</div>
			<div className="text-[#787878] font-fontRoboto flex px-10 justify-between mt-4">
				<p>AS Roby</p>
				<div className="flex items-center gap-2"><CgFileDocument /> <p>2</p>
				</div>
				<p>77</p>
			</div>


		</div>
	);
};

export default Card;