
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';



// // import required modules

// import Card from './Card';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// export default function PopularCourse() {
//   return (
//     <div className='px-24 my-5'>
//       {/*  top */}
//       <div className='flex items-center justify-between mb-8'>
//         {/* text */}
//         <div>
//           <h1 className='font-fontRobotoSlab text-[#333333] text-3xl font-bold'>Popular Course</h1>
//           <p className='font-fontRoboto text-[#606060] text-[15px]'>Limitless learning, more possibilities</p>
//         </div>
//         {/* button */}
//         <div className='flex items-center gap-2'>

//         <button  className='p-2  border hover:text-[#ffb606]  hover:border-[#ffb606]   transition-all ease-linear'><MdKeyboardArrowLeft/></button>
//         <button className='p-2  border hover:text-[#ffb606]  hover:border-[#ffb606] transition ease-linear'><MdKeyboardArrowRight /></button>



//         </div>
//       </div>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}

//         className="mySwiper"
//       >
//         <SwiperSlide><Card></Card></SwiperSlide>
//         <SwiperSlide><Card></Card></SwiperSlide>
//         <SwiperSlide><Card></Card></SwiperSlide>
//         <SwiperSlide><Card></Card></SwiperSlide>
//         <SwiperSlide><Card></Card></SwiperSlide>
//         <SwiperSlide><Card></Card></SwiperSlide>

//       </Swiper>
//     </div>
//   );
// }


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import Card from './Card';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function PopularCourse() {
  const prevButtonRef = useRef(null); // Reference for the previous button
  const nextButtonRef = useRef(null); // Reference for the next button

  return (
    <div className='md:px-24 px-6 my-5'>
      {/*  top */}
      <div className='flex items-center justify-between mb-8'>
        {/* text */}
        <div>
          <h1 className='font-fontRobotoSlab text-[#333333] text-3xl font-bold mb-2'>Popular Course</h1>
          <p className='font-fontRoboto text-[#606060] text-[15px]'>Limitless learning, more possibilities</p>
        </div>
        {/* button */}
        <div className='hidden md:flex items-center gap-2'>
          <button
            ref={prevButtonRef} // Attach reference
            className='p-2 border hover:text-[#ffb606] hover:border-[#ffb606] transition-all ease-linear'
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            ref={nextButtonRef} // Attach reference
            className='p-2 border hover:text-[#ffb606] hover:border-[#ffb606] transition-all ease-in-out duration-1000'
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevButtonRef.current, // Link custom buttons
          nextEl: nextButtonRef.current,
        }}
        onInit={(swiper) => {
          // Update navigation elements after Swiper initialization
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // for mobile device
        breakpoints={{
          // When the window width is >= 320px (Mobile)
          320: {
            slidesPerView: 1, // Show 1 slide
            spaceBetween: 10,
            pagination: {
              clickable: true, // Enable pagination for mobile
            },
          },
          // When the window width is >= 768px (Tablet)
          768: {
            slidesPerView: 2, // Show 2 slides
            spaceBetween: 15,
            pagination: false,
          },
          // When the window width is >= 1024px (Desktop)
          1024: {
            slidesPerView: 3, // Show 3 slides
            spaceBetween: 20,
            pagination: false,
          },
          // When the window width is >= 1280px (Large Desktop)
          1280: {
            slidesPerView: 4, // Show 4 slides
            spaceBetween: 30,
            pagination: false,
          },
        }}
        modules={[Navigation,Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <button className='mb-20 mx-auto bg-[#ffb606] hover:bg-[#d8a327] flex items-center justify-center mt-9 px-8 py-3 transition duration-300 ease-in-out font-fontRoboto'>VIEW MORE</button>
    </div>
  );
}
