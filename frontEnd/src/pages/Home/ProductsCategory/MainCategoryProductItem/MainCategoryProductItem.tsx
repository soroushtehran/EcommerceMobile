import React from 'react'

interface ProductCategoryItemProps {
    src: string;
    title: string;
}

export default function MainCategoryProductItem({ src, title }: ProductCategoryItemProps) {
    return (
        <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
            <a href="#" className='flex items-center  w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden outline outline-3 outline-offset-4 outline-pink-700'>
                <img src={src} alt={title} loading='lazy' className='w-full h-full hover:scale-105' />
            </a>
            <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'> {title} </span>
        </div>
    )
}
