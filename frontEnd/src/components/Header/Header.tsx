import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { HiMiniShoppingBag, HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { TbCircleCaretUp, TbCircleCaretDown } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import CustomIcon from "../CustomIcon/CustomIcon";
import { AnimatePresence, MotionConfig, motion, transform, useAnimationControls } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import HeaderSearchPannel from "./HeaderSearchPannel/HeaderSearchPannel";
import Logo from "../Logo/Logo";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  // Move To subMenuItem
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);


  return (
    <header>
      <>{console.log('render')}</>
      {/* Header */}
      <div className="fixed w-[85%] h-[60px] px-3 lg:px-5 mx-auto mt-4 right-0 left-0 bg-slate-400 text-gray-100 rounded-full text-md lg:text-lg xl:text-xl font-bold animate-shadowLamp delay-2000 z-20">

        {/* Header Content Over Md Size*/}
        <div className="hidden md:basic-flex h-full">

          {/* Logo - Nav Menu */}
          <div className="flex items-center gap-x-5 md:gap-x-3 xl:gap-x-5">

            {/* Logo */}
            <Logo className="w-14 h-full" />

            {/* nav Menu */}
            <nav>
              <ul className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-8">
                <li className="relative group">
                  <a href="#"> موبایل </a>

                  {/* Sub Menu */}
                  <ul className="absolute invisible opacity-0 top-8 -right-1 w-44 h-min items-center flex flex-col p-6 delay-75 tracking-normal space-y-4 shadow-lg rounded-2xl bg-primary border-t-[3px] border-primaryDark z-20 transition-all group-hover:visible group-hover:opacity-100 child-hover:text-primaryDark child:transition-colors child:min-w-max">
                    <li>
                      <a href="#"> گوشی اپل </a>
                    </li>
                    <li>
                      <a href="#"> گوشی سامسونگ </a>
                    </li>
                    <li>
                      <a href="#"> گوشی شیائومی </a>
                    </li>
                    <li>
                      <a href="#"> گوشی هواوی </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"> لوازم جانبی </a>
                </li>
                <li>
                  <a href="#"> بلاگ </a>
                </li>
                <li>
                  <a href="#"> تماس با ما </a>
                </li>
                <li>
                  <a href="#"> درباره ما </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search - Card Icon - Divider - Login Logout */}
          <div className="flex items-center gap-x-2 xl:gap-x-4">

            {/* Search - Card Icon */}
            <div className="flex items-center gap-x-2 lg:gap-x-4">

              {/* Search */}
              <HeaderSearchPannel />

              {/* Card Icon */}
              <CustomIcon icon={<HiMiniShoppingBag />} />
            </div>

            {/* Divider */}
            <div className="block xl:hidden w-px h-10 bg-slate-300"></div>

            {/* Login Logout */}
            <div>
              <a
                href="#"
                className="relative flex items-center xl:pl-6 xl:pr-2 py-1 rounded-md xl:border xl:border-md xl:shadow tranision transition-all hover:gap-x-3 xl:border-primary xl:bg-secondary xl:hover:bg-primary group"
              >
                <CustomIcon
                  icon={<HiMiniArrowLeftOnRectangle />}
                  className=" xl:absolute left-0.5 xl:translate-x-2 transition-all xl:opacity-0 group-hover:block group-hover:opacity-100 xl:group-hover:translate-x-0 duration-300"
                />
                <span className="hidden xl:inline-block">ورود | ثبت نام</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header Content Max Md Size*/}
        <div className="flex md:hidden justify-between items-center h-full mx-4">
          <CustomIcon onClick={() => setIsShowMenu(true)} icon={<FaBars />} />
          <Logo className="w-14 h-full" />
          <CustomIcon icon={<HiMiniShoppingBag />} />

          {/* Menu */}
          {isShowMenu && <div className="fixed w-[60%] min-h-screen bg-slate-400 text-gray-100 top-0 right-0 z-30 shadow-md px-10">
            <div className="basic-flex border-b-2 border-slate-300" >
              <Logo className="w-28 h-full" />
              <div className="Header__Menu--custom-close basic-flex" onClick={() => setIsShowMenu(false)}></div>
            </div>

            {/* Menu Nav */}
            <nav>
              <ul className="flex flex-col text-2xl gap-2 pt-6 child:w-full child:block child:p-3 child:rounded-lg child-hover:bg-black">
                <li className="relative group">
                  <Link to="/test" className=" w-full basic-flex" onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
                    موبایل
                    <CustomIcon icon={isShowSubMenu ? <TbCircleCaretDown /> : <TbCircleCaretUp />} />
                  </Link>

                  {/* Sub Menu */}
                  {isShowSubMenu && <ul className="flex flex-col gap-3 text-xl py-3 pr-8 list-disc child:rounded-md child:px-2 child-hover:bg-slate-200 child-hover:text-black">
                    <li>
                      <a href="#"> گوشی اپل </a>
                    </li>
                    <li>
                      <a href="#"> گوشی سامسونگ </a>
                    </li>
                    <li>
                      <a href="#"> گوشی شیائومی </a>
                    </li>
                    <li>
                      <a href="#"> گوشی هواوی </a>
                    </li>
                  </ul>}
                </li>
                <li>
                  <a href="#"> لوازم جانبی </a>
                </li>
                <li>
                  <a href="#"> بلاگ </a>
                </li>
                <li>
                  <a href="#"> تماس با ما </a>
                </li>
                <li>
                  <a href="#"> درباره ما </a>
                </li>
              </ul>
            </nav>
          </div>}

          {/* Menu Background */}
          {isShowMenu && <div className="fixed w-full h-full cursor-pointer inset-0 bg-black/40 z-20" onClick={() => setIsShowMenu(false)}></div>}
        </div>
      </div>
    </header>
  );
}
