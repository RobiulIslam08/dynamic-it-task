// // Import Swiper React components and modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Slider = () => {
// 	return (
// 		<div >
// 			<Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[200px] md:h-[400px] lg:h-[550px]">
// 				<SwiperSlide>
// 					<div >
// 						<img className="" src="https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg" alt="" />
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div>
// 						<img src="https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg" alt="" />
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div>
// 						<img src="https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg" alt="" />
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div>
// 						<img src="https://ditibd.com/wp-content/uploads/2024/12/dynamic.jpg" alt="" />
// 					</div>
// 				</SwiperSlide>

// 			</Swiper>
// 		</div>
// 	);
// };

// export default Slider;


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dynamic1 from '../assets/images/470136406_1151931413348426_8544589831281606605_n.jpg'
import dynamic2 from '../assets/images/470803060_1156763426198558_2716847117309928664_n.jpg'
import dynamic3 from '../assets/images/473079832_1173522394522661_9038373643914730627_n.jpg'
// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2000, // Set the slide change interval to 2 seconds
          disableOnInteraction: false, // Ensures autoplay continues even after interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}

        className="mySwiper h-[200px] md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>

          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src={dynamic1}
              loading="lazy"
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#312d2dcb]  to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent text-center font-bold font-fontRobotoSlab'>Dynamic IT Institute</p>
                <p className='text-center text-sm lg:text-base'> <h1  >
                  Our{' '}
                  <span style={{ color: '', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter

                      words={['website working now']}
                      loop={false}
                      cursor
                      cursorStyle='_'
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                  </span>
                </h1></p>

              </div>
            </div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src={dynamic2}
              loading="lazy"
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#312d2dcb]  to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent text-center font-bold font-fontRobotoSlab'>Dynamic IT Institute</p>
                <p className='text-center text-sm lg:text-base'> <h1  >
                  Our{' '}
                  <span style={{ color: '', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter

                      words={['website working now']}
                      loop={false}
                      cursor
                      cursorStyle='_'
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                  </span>
                </h1></p>

              </div>
            </div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src={dynamic3}
              loading="lazy"
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#312d2dcb] to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent text-center font-bold font-fontRobotoSlab'>Dynamic IT Institute</p>
                <p className='text-center text-sm lg:text-base'> <h1  >
                  Our{' '}
                  <span style={{ color: '', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter

                      words={['website working now']}
                      loop={false}
                      cursor
                      cursorStyle='_'
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                  </span>
                </h1></p>

              </div>
            </div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>

        </SwiperSlide>



      </Swiper>

    </div>
  );
};

export default Slider;


// https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg
// https://i.ibb.co/t8B1TdN/Nilgiri.jpg
// https://i.ibb.co/3CYtPYc/images-2.jpg
// https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpgj