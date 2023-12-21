import { motion } from 'framer-motion'
import React from 'react'

export default function BackgroundBlur() {
    const bgImages = [
        "mainBannerLightBackground.jpg",
        // "mainBannerLightBackground2.webp",
        "mainBannerLightBackground3.webp",
        "mainBannerLightBackground4.webp",
    ];

    const randomInteger = (max: number) => {
        const rand = 0 - 0.5 + Math.random() * (max - 0 + 1);
        return Math.round(rand);
    };

    const getRandomBGImage = (bgImages: string[]) => {
        const randomIndex = randomInteger(bgImages.length - 1);
        return bgImages[randomIndex];
    };

    return (
        <motion.div
            initial={{
                scale: -2.7,
                x: -200,
            }}
            animate={{
                scale: -2.2,
                x: -100,
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="absolute w-full h-full -z-20 top-0 right-0 blur-md -scale-[4.7]"
        >
            <img
                className="w-full h-full"
                src={`/images/home/${getRandomBGImage(bgImages)}`}
                alt=""
            />
        </motion.div>
    )
}
