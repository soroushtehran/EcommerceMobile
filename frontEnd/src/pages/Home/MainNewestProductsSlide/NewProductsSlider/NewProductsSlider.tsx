
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './NewProductsSlider.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import ProductCard from '../../../../components/ProductCard/ProductCard';

export default function SwiperProduct({hastOffer} : any) {
    return (
        <div className='w-full'>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={false}
                navigation={true}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    926: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
                    <ProductCard src="/images/home/mobile1.png" />
                </SwiperSlide>

                {/* <SwiperSlide className='h-full  dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full dark:bg-zinc-700'>
          <ProductCard />
        </SwiperSlide> */}

            </Swiper>

        </div>
    )
}
























// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './NewProductsSlider.css';
// // import required modules
// import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
// import BackgroundBlur from '../../../../components/BackgroundBlur/BackgroundBlur';
// import ProductCard from '../../../../components/ProductCard/ProductCard';

// export default function NewProductsSlider() {
//     return (
//         <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: true,
//             }}
//             loop={true}
//             pagination={{
//                 clickable: true,

//             }}

//             navigation={true}
//             autoplay
//             autoFocus
//             breakpoints={{
//                 640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                 },
//                 768: {
//                     slidesPerView: 2,
//                     spaceBetween: 30,
//                 },
//                 926: {
//                     slidesPerView: 3,
//                     spaceBetween: 30,
//                 },
//             }}
//             modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//             className="mySwiper"
//         >
//             <SwiperSlide className='bg-slate-100 rounded-lg h-full'>
//                 {/* <BackgroundBlur /> */}
//                 {/* <div>
//                     <img src="/images/home/mobile1.png" />
//                 </div> */}
//                 <ProductCard src="/images/home/mobile1.png" />
//             </SwiperSlide>

//             {/* <SwiperSlide className='bg-slate-100 rounded-lg relative overflow-hidden'>

//                 <BackgroundBlur />
//                 <div><img src="/images/home/mobile2.png" /></div>
//             </SwiperSlide>
//             <SwiperSlide className='bg-slate-100 rounded-lg relative overflow-hidden'>

//                 <BackgroundBlur />
//                 <div><img src="/images/home/mobile3.png" /></div>
//             </SwiperSlide>
//             <SwiperSlide className='bg-slate-100 rounded-lg relative overflow-hidden'>

//                 <BackgroundBlur />
//                 <div><img src="/images/home/mobile4.png" /></div>
//             </SwiperSlide> */}
//         </ Swiper>
//     )
// }
