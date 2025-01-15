import backgroundImg from '../assets/images/bg-register.jpg';

const RegisterNow = () => {
	return (
		<div
			className="relative  bg-cover bg-center mb-16"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Content */}
			<div className="relative text-white p-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-36 px-6 md:px-24 ">
				{/*  text */}
				<div>
					<h1 className='uppercase font-fontRobotoSlab text-[#c2c213] text-2xl md:text-5xl font-bold mb-2'>Register Now</h1>
					<p className='font-fontRoboto text-[15px]'>GET 10 OF ONLINE COURSES FOR FREE</p>
					{/* time */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
						<div className='p-6 border-[5px] rounded-full leading-none'>
							<p className='flex justify-center items-center w-14 text-5xl'>0</p>
							<p className='text-center'>DAYS</p>
						</div>
						<div className='p-6 border-[5px] rounded-full leading-none'>
							<p className='flex justify-center items-center w-14 text-5xl'>0</p>
							<p className='text-center'>HOUR</p>
						</div>
						<div className='p-6 border-[5px] rounded-full leading-none'>
							<p className='flex justify-center items-center w-14 text-5xl'>0</p>
							<p>MINUTE</p>
						</div>
						<div className='p-6 border-[5px] rounded-full leading-none'>
							<p className='flex justify-center items-center w-14 text-5xl'>0</p>
							<p>SECOND</p>
						</div>


					</div>
				</div>
				{/* form */}
				<div className="z-10 bg-white shadow-lg overflow-hidden w-[300px] md:w-[448px]">
					{/* Form Header */}
					<div className="[clip-path:ellipse(53%_80%_at_52%_0%)]  flex items-center justify-center bg-[#ffb606] text-white text-center px-16 pt-4">
						<h2 className="text-2xl font-bold pb-20">
							Create your free account now and immediately get access to 100s of online courses.

						</h2>

					</div>

					{/* Form */}
					<form action="" className="p-6 w-[300px] md:w-[400px] mx-auto">
						<div className="mb-4">
							<label className="sr-only">Your Name</label>
							<input
								type="text"
								placeholder="Your Name *"
								className="w-full border border-gray-300  p-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
							/>
						</div>
						<div className="mb-4">
							<label className="sr-only">Email</label>
							<input
								type="email"
								placeholder="Email *"
								className="w-full border border-gray-300  p-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
							/>
						</div>
						<div className="mb-6">
							<label className="sr-only">Phone</label>
							<input
								type="text"
								placeholder="Phone *"
								className="w-full border border-gray-300  p-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-black text-white py-3  hover:bg-[#ffb606] duration-300 ease-in-out transition"
						>
							GET IT NOW
						</button>
					</form>
				</div>

			</div>
		</div>
	);
};

export default RegisterNow;
