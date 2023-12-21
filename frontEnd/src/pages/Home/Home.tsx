import React, { useEffect, useRef } from "react";
import MainBanner from "./MainBanner/MainBanner";
import CategoryBanner from "./MainCategoryBanner/MainCategoryBanner";
import ProductsCategory from "./ProductsCategory/MainCategoryProducts";
import MainNewestProductsSlide from "./MainNewestProductsSlide/MainNewestProductsSlide";
import MainBackgroundAccessoryFlow from "./MainBackgroundAccessoryFlow/MainBackgroundAccessoryFlow";
import MainBackgroundMobileFlow from "./MainBackgroundMobileFlow/MainBackgroundMobileFlow";
import MainCategoryProducts from "./ProductsCategory/MainCategoryProducts";
import MainCategoryBanner from "./MainCategoryBanner/MainCategoryBanner";
import MainCategoryDiscount from "./MainCategoryDiscount/MainCategoryDiscount";
import MainDiscountProductsSlide from "./MainDiscountProductsSlide/MainDiscountProductsSlide";
import MainProductsService from "./MainProductsService/MainProductsService";
import BackgroundBlur from "../../components/BackgroundBlur/BackgroundBlur";
// import 'swiper/css/effect-fade';

export default function Home() {

  return (

    <main className="relative overflow-hidden">

      {/* Background */}
      <BackgroundBlur />
      <MainBackgroundMobileFlow />
      <MainBackgroundAccessoryFlow />
      
      {/* Main Sections */}
      <MainBanner />
      <MainNewestProductsSlide />
      <MainCategoryProducts />
      <MainCategoryDiscount />
      <MainDiscountProductsSlide />
      <MainCategoryBanner />
      <MainProductsService />
    </main>
  );
}