/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Dropdown = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false);
  
	return (
	  <li
		className="group relative"
		onMouseOver={() => setIsOpen(true)}
		onMouseLeave={() => setIsOpen(false)}
	  >
		<span className="cursor-pointer hover:text-[#ffb606] flex items-center gap-2">
		  {title} <MdKeyboardArrowDown />
		</span>
		{isOpen && (
		  <ul className="absolute bg-white p-4 boxShadow top-10 left-0 w-48">
			{items.map((item, idx) => (
			  <li
				key={idx}
				className="hover:text-[#ffb606] transition-all duration-300"
			  >
				{item}
			  </li>
			))}
		  </ul>
		)}
	  </li>
	);
  };
  