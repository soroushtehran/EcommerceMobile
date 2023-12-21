import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi";
import { AnimatePresence, MotionConfig, motion, transform, useAnimationControls } from "framer-motion";
import CustomIcon from '../../CustomIcon/CustomIcon';


export default function HeaderSearchPannel() {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const controls = useAnimationControls();

    function onSearchIconClick() {
        const newValue = !showSearchInput;
        setShowSearchInput(newValue)
        if (newValue) controls.start("start");
        else controls.start("end");

    }

    return (
        <div className='container'>
            <div className='header__search-holder relative flex w-max'>
                <AnimatePresence>
                    <motion.div className='w-36 lg:w-72 xl:w-80 h-10 origin-left border-2 rounded-r-full overflow-hidden'
                        variants={{
                            initial: {
                                scaleX: 0
                            },
                            start: {
                                scaleX: 1
                            },
                            end: {
                                scaleX: 0
                            },
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        initial="initial"
                        animate={controls}
                    >
                        <input className='w-full h-full text-black border-none outline-none placeholder:text-slate-400' type="text" placeholder='جستجو' />
                    </motion.div>
                </AnimatePresence>

                <div
                    className={`header__search--icon group rounded-full hover:bg-black transition-colors delay-300 duration-500`}
                    onClick={onSearchIconClick}>
                    <CustomIcon icon={<HiSearch />} />
                    <AnimatePresence>
                        <motion.div
                            className={`bg-black absolute w-full h-full -z-10 duration-0 rounded-l-full transition-all`}
                            variants={{
                                initial: {
                                    opacity: 0,
                                },
                                start: {
                                    borderRadius: '50% 0 0 50%',
                                    opacity: 1,
                                },
                                end: {
                                    borderRadius: '50% 50% 50% 50%',
                                    opacity: 0,
                                },
                            }}
                            transition={{
                                duration: 1.5
                            }}
                            initial="initial"
                            animate={controls}
                        ></motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}
