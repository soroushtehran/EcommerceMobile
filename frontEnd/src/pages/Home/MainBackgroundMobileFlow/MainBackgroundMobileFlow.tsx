import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MainBackgroundMobileFlow() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '5 1'],
        smooth: 1
    });
    const translateX = useTransform(
        scrollYProgress,
        [0, 1],
        [-1000, -90]
    )
    const opacity = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 0.3]
    )



    return (
        <motion.div
            ref={ref}
            className='fixed top-44 -left-20 w-96 h-80 bg-transparent -z-10  md:inline-block'
            style={{
                left: translateX,
                opacity,
                // y: translateX,
            }}
            initial={{
                y: 0,
            }}
            animate={{
                y: -50
            }}
            transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <img src="/images/home/main-mobile.png" alt="mainMobileBG" className='w-full h-full' />
        </motion.div>
    )
}
