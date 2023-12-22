import React from "react";
import { motion } from "framer-motion";
import MainBannerSwiper from "./MainBannerSwiper/MainBannerSwiper";
import CustomButton from "../../../components/CustomButton/CustomButton";
import BackgroundBlur from "../../../components/BackgroundBlur/BackgroundBlur";

export default function MainBanner() {


  return (
    <section className="relative">
      {/* <BackgroundBlur />  */}

      {/* Background Gradient Circle */}
      {/* <motion.div
        className="absolute hidden lg:inline-block w-[1100px] h-[1100px] lg:-right-[450px] xl:-right-[230px] -top-[360px] z-10 main--linearGradient rotate-[130deg] rounded-full opacity-50"
        initial={{
          translateY: -600,
          rotate: "130deg",
        }}
        animate={{
          translateY: 0,
          rotate: "130deg",
        }}
        transition={{
          duration: 1,
          delay: 0.7,
        }}
      />
      <motion.div
        className="absolute hidden lg:inline-block w-[1100px] h-[1100px] -right-24 -top-14 z-10 main--linearGradient rounded-full opacity-50"
        initial={{
          x: 600,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      /> */}

      {/* Main Content */}
      {/* Main Content - Swiper */}
      <div className="container flex flex-col lg:flex-row justify-around items-center pt-14 lg:pt-0 gap-x-3 w-full h-screen overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 2,
          }}
          className="w-3/4 lg:w-1/2 xl:w-1/3 order-2 lg:order-1 h-2/3 transition-all z-10"
        >
          <MainBannerSwiper />
        </motion.div>

        {/* Main Content - Titles */}
        <div className="w-full lg:w-1/2 xl:w-1/3 order-2 lg:order-2 h-1/2 pr-[6%] pt-2 flex   justify-center ">
          <div className="flex flex-col gap-y-6 justify-center text-[#2c2c2c] text-2xl">
            <h1 className="text-5xl">با ما به روز باشید</h1>
            <p className="line-clamp-3">
              معتبرترین فروشگاه آنلاین گوشی‌های موبایل
            </p>
            <p>
              برای دیدن محصولات بیشتر
              <CustomButton href="#" className="group relative duration-1000 delay-0 transition-colors  hover:text-slate-500 bg-slate-100 py-2 px-3 overflow-hidden">
                <motion.div
                  className="group-hover:scale-[150] duration-1000 delay-0 transition-transform absolute w-2 h-2 rounded-full bg-red-800 left-1 top-1"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.7,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                کلیــک
              </CustomButton>
              کنید.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
