import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

export default function MainBannerSwiper() {
  return (
    
    <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: true,
    }}
    loop
    className="mySwiper w-full h-full transition-all"
    modules={[Autoplay, EffectFade]}
  >
    <SwiperSlide className="  w-full h-full">
      <img
        className="w-full h-full"
        src="/images/home/mobile1.png"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide className="  w-full h-full">
      <img
        className="w-full h-full"
        src="/images/home/mobile2.png"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide className="  w-full h-full">
      <img
        className="w-full h-full"
        src="/images/home/mobile3.png"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide className="  w-full h-full">
      <img
        className="w-full h-full"
        src="/images/home/mobile4.png"
        alt=""
      />
    </SwiperSlide>
  </Swiper>
  )
}
