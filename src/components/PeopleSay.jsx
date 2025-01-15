import  { useState } from "react";

const testimonials = [
	{
		name: "Mobarak Hossen Hridoy",
		role: "Assistant Computer Operator",
		image: "https://ditibd.com/wp-content/uploads/2015/11/team-6.jpg",
		feedback:
			"Education WP is a special build for an effective education & Learning Management System site.",
	},
	{
		name: "Rabiul Islam",
		role: "Assistant Computer Operator",
		image: "https://ditibd.com/wp-content/uploads/2015/11/team-5.jpg",
		feedback:
			"Education WP is the next generation & one of the best education WordPress themes.",
	},
	{
		name: "Ariful Islam",
		role: "Assistant Computer Operator",
		image: "https://ditibd.com/wp-content/uploads/2015/11/team-3.jpg",
		feedback:
			"Education WP is a special build for an effective education & Learning Management System site.",
	},
	{
		name: "Nadim Hasan",
		role: "Assistant Computer Operator",
		image: "https://ditibd.com/wp-content/uploads/2024/12/rupok-islam.png",
		feedback:
			"Education WP is the next generation & one of the best education WordPress themes.",
	},
	{
		name: "Siam Ahmed",
		role: "Web Developer",
		image: "https://ditibd.com/wp-content/uploads/2024/12/465176570_999798528583438_6370619053858591082_n.jpg",
		feedback:
			"This platform offers an outstanding learning experience, tailored to individual needs.",
	},
	
];

const PeopleSay = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div className="py-10 md:py-24">
			<h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
			<div className="flex justify-center items-center space-x-4">
				{/* Profile Images */}
				<div className="flex space-x-4 overflow-hidden">
					{testimonials.slice(0, 5).map((testimonial, index) => (
						<div
							key={index}
							onClick={() => handleClick(index)}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className={`cursor-pointer w-20 h-20 rounded-full border-4 flex items-center justify-center ${currentIndex === index
									? "border-yellow-500 transform scale-110"
									: hoveredIndex === index
										? "border-blue-500"
										: "border-gray-300"
								} transition-all duration-300`}
						>
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="w-full h-full rounded-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Testimonial Content */}
			<div className="max-w-md mx-auto  p-6 mt-8 text-center">
				<h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
				<p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
				<p className="text-gray-700 mt-4 text-sm">{testimonials[currentIndex].feedback}</p>
			</div>
		</div>
	);
};

export default PeopleSay;
