import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDoubleLeft, HiSparkles } from "react-icons/hi2";
import CustomIcon from '../CustomIcon/CustomIcon';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subTitle?: string;
    link?: string;
    linkTitle?: string;
    hasDivider?: boolean;
}

export default function SectionTitle({
    title,
    subTitle,
    link,
    linkTitle,
    hasDivider = true,
}: SectionTitleProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '6 1'],

    });
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [-100, 0]
    )

    return (
        <motion.div
            ref={ref}
            className='relative w-full border-2 border-t-0 border-r-0 shadow-md rounded-r-3xl rounded-l-3xl border-black p-3 mb-3  bg-slate-100'
            style={{ y }}
        >
            <div className='basic-flex gap-4'>
                {/* Add Title props */}
                <div className='basic-flex gap-4 min-w-max'>
                    <CustomIcon textSize='text-4xl' className='text-sky-300 font-bold' icon={<HiSparkles />} />
                    <div className='basic-flex flex-col'>
                        <h4 className='section-title font-MorabbaBold basic-flex gap-2'>
                            {title}
                        </h4>
                        {!!subTitle && <span className='section-subtitle  font-MorabbaLight'> {subTitle} </span>}
                    </div>
                </div>
                {hasDivider && <div className='w-full h-px bg-slate-500'></div>}
                {/* Add Show More Products Link */}
                {!!link && <Link to={link} className='section-link font-MorabbaLight basic-flex text-xl min-w-max'>
                    {linkTitle ? linkTitle : 'مشاهده همه محصولات'}
                    <CustomIcon icon={<HiChevronDoubleLeft />} />
                    {/* <HiArrowLeft  /> */}
                </Link>}
            </div>
        </motion.div>
    )
}
