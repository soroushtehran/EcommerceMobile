import React, { ReactNode } from 'react'

interface MainProductsServiceItemProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function MainProductsServiceItem({
    icon,
    title,
    description,
}: MainProductsServiceItemProps) {
    return (
        <div className='flex items-center justify-center lg:justify-between flex-col sm:flex-row gap-x-4 gap-y-5 text-center'>
            <div className='text-sky-500 text-4xl lg:text-6xl pb-2'>
                {icon}
            </div>
            <div>
                <h5 className='font-DanaDemiBold text-sm md:text-lg mb-1 md:mb-2'> {title} </h5>
                <span className='text-xs md:text-sm'> {description} </span>
            </div>

        </div>
    )
}
