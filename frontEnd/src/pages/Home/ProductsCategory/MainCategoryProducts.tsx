import React from 'react'
import ProductCategoryItem from './MainCategoryProductItem/MainCategoryProductItem'

const productsItemsData = [
    {
        id: '1',
        src: '/images/home/productsCategory/headPhone.jpg',
        title: 'هدفون',
    },
    {
        id: '2',
        src: '/images/home/productsCategory/speacker.jpg',
        title: 'اسپیکر',
    },
    {
        id: '3',
        src: '/images/home/productsCategory/handsfree.jpg',
        title: 'هندفری',
    },
    {
        id: '4',
        src: '/images/home/productsCategory/powerBank.jpg',
        title: 'پاور بانک',
    },
    {
        id: '5',
        src: '/images/home/productsCategory/watch.jpg',
        title: 'ساعت هوشمند',
    },
    {
        id: '6',
        src: '/images/home/productsCategory/tablet.jpg',
        title: 'تبلت',
    },
    {
        id: '7',
        src: '/images/home/productsCategory/mobileKit.jpg',
        title: 'تجیزات موبایل',
    },
    {
        id: '8',
        src: '/images/home/productsCategory/mobile.jpg',
        title: 'موبایل',
    },
]

export default function MainCategoryProducts() {
    return (
        <section className='sectionSpace'>
            <div className='container'>
                <div className='flex items-center justify-around gap-y-5 gap-x-[19px] md:gap-[36px] flex-wrap border-px py-4 pt-6 rounded-3xl shadow-xl bg-gray-200 dark:bg-slate-900 child:border-2'>
                    {productsItemsData?.map(productsItemData => (
                        <ProductCategoryItem key={productsItemData.id} {...productsItemData} />
                    ))}
                </div>
            </div>
        </section>
    )
}
