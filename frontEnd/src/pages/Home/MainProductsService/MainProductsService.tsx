import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { TfiHeadphoneAlt, TfiGift } from 'react-icons/tfi'
import MainProductsServiceItem from './MainProductsServiceItem/MainProductsServiceItem'


const MainProductsServiceData = [
    {
        id: 1,
        icon: <TfiHeadphoneAlt />,
        title: 'پشتیبانی شبانه روزی',
        description: '7 روز هفته , 24 ساعته',
    },
    {
        id: 2,
        icon: <TfiGift />,
        title: 'امکان تحویل اکسپرس',
        description: 'ارسال بسته با سرعت زیاد',
    },
    {
        id: 3,
        icon: <HiOutlineBuildingOffice2 />,
        title: 'عمده فروشی و فروش سازمانی ',
        description: 'برگزاری نمایشگاه های موقت',
    },
    {
        id: 4,
        icon: <HiOutlineUserGroup />,
        title: 'باشگاه مشتریان',
        description: 'صدور کارت باشگاه مشتریان ',
    },
]

export default function MainProductsServices() {
    return (
        <section className='services mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24'>
            <div className='flex items-center justify-between gap-y-11 flex-wrap child:w-1/2 lg:child:w-auto child:text-center text-zinc-700 dark:text-white border-px py-14 px-10 rounded-3xl shadow-xl bg-gray-200 dark:bg-slate-900 '>
                {
                    MainProductsServiceData.map(MainProductServiceData => (
                        <MainProductsServiceItem key={MainProductServiceData.id} {...MainProductServiceData} />
                    ))
                }

            </div>
        </section>
    )
}
