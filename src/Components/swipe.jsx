import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import one from  "./Media/three.jpg"
import two from  "./Media/one.jpg"
import three from  "./Media/two.jpg"
import four from  "./Media/four.jpg"
import five from  "./Media/five.jpg"
import six from  "./Media/six.avif"

// import required modules
import { EffectFlip,Autoplay, Pagination } from 'swiper/modules';

export default function Swipe() {
  return (
    <Swiper pagination={true} 
    effect={'flip'}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]} 
    className="mySwiper w-[50vw]">
      {/* <SwiperSlide className='bg-slate-200'><img src={one} alt="#" className='bg-contain'/></SwiperSlide>
      <SwiperSlide className='bg-slate-200'><img src={two} alt="#" className='bg-contain'/></SwiperSlide>
      <SwiperSlide className='bg-slate-200'><img src={three} alt="#" className='bg-contain'/></SwiperSlide>
      <SwiperSlide className='bg-slate-200'><img src={four} alt="#" className='bg-contain'/></SwiperSlide>
      <SwiperSlide className='bg-slate-200'><img src={five} alt="#" className='bg-contain'/></SwiperSlide>
      <SwiperSlide className='bg-slate-200'><img src={six} alt="#" className='bg-contain'/></SwiperSlide> */}
      <SwiperSlide className='bg-transparent text-[8vw]'><h1>WORKMAN</h1></SwiperSlide>
      <SwiperSlide className='bg-transparent text-[8vw]'><h1>VENDOR</h1></SwiperSlide>
      <SwiperSlide className='bg-transparent text-[8vw]'><h1>WORKER</h1></SwiperSlide>

    </Swiper>
  );
}
