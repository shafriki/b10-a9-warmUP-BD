import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='max-w-screen-lg mx-3 md:mx-auto mt-10 '>
            <div className="w-full bg-gray-100">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} autoplay={{ delay: 3000,  disableOnInteraction: false,}}className="h-full">

                <SwiperSlide>
                    <img src="https://i.ibb.co.com/nDkfGFv/bg-1.png" alt="Slide 1"
                        className="w-full h-full object-cover"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co.com/7kBwZm8/bg-3repet.png"
                        alt="Slide 2" className="w-full h-full object-cover"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co.com/r73MSbG/bg-3.png" alt="Slide 3"
                        className="w-full h-full object-cover"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
        </div>
    );
};

export default Banner;
