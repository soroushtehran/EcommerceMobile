import React, { useState, useEffect } from 'react'
import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import CountdownTime from '../CountdownTime/CountdownTime';

interface ProductCardProps {
    src: string;
    hasOffer?: boolean;
}
const targetTime = new Date('2023-12-09T23:59:59');

export default function ProductCard({ src, hasOffer: offer }: ProductCardProps) {
    const [hasOffer, setHasOffer] = useState(false);

    useEffect(() => {
        const nowDate = new Date();
        const diff = +targetTime - +nowDate;

        setHasOffer(!!offer && diff > 0);
    }, [])

    return (
        <div className='w-full h-full border-2 shadow-xl rounded-2xl p-2'>
            <div className='relative overflow-hidden'>
                <img src={src} alt="imageTitle" />
                {hasOffer && <CountdownTime targetTime={targetTime} />}
            </div>
            <h5 className='font-MorabbaBold line-clamp-2 max-h-12 text-zinc-700 mb-3'>
                موبایل مدل 1
            </h5>
            <div className='flex gap-x-4 border-b-2 pb-3'>
                <div className='text-sky-500 text-base md:text-base'>
                    <span> 140,000 </span>
                    <span className='text-xs tracking-tighter'> تومان </span>
                </div>
                {hasOffer && <div className='offer'>
                    <span> 123,200 </span>
                </div>}
            </div>
        </div>

        //     <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300 dark:border-b-gray-700'>
        //         <div className='text-sky-500 dark:text-sky-400 pr-1'>
        //             <span className='font-DanaDemiBold text-base md:text-xl '>
        //                 154000
        //             </span>
        //             <span className='text-xs md:text-sm tracking-tighter'>
        //                 تومان
        //             </span>
        //         </div>
        //         <div className='offer'>
        //             <span className='text-xs md:text-xl'>144000</span>
        //             <span className='hidden md:inline text-sm tracking-tighter'>تومان</span>

        //         </div>


        //     </div>
        //     <div className='flex items-center justify-between mt-2.5'>
        //         <a href="#" className='flex items-center gapx2 md:gap-x-3' >
        //             <span className='flex items-center justify-center w-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-sky-600 dark:bg-zinc-800 dark:hover:bg-slate-500 text-gray-400 hover:text-white rounded-full'><HiOutlineShoppingCart /></span>
        //         </a>
        //         <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
        //             <CiStar />
        //             <CiStar />
        //             <CiStar />
        //             <CiStar />
        //             <CiStar />
        //         </span>
        //     </div>
        // </div>
        // <div className='border-2 border-black h-full w-full '>
        //     <div className='relative mb-2 md:mb-5 rounded-t-lg overflow-hidden'>
        //         <img src={src} alt="css" className='w-32 mx-auto md:w-auto  h-full' />
        //         <span className='absolute top-1.5 right-1.5 block h-5 md:w-10 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaDemiBold bg-sky-300 text-white rounded-full'>12%</span>
        //     </div>
        //     <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5 min-h-[40px] md:min-h-[56px]">ونس چرم طوسی مردانه mrc118-01</h5>
        //     <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300 dark:border-b-gray-700'>
        //         <div className='text-sky-500 dark:text-sky-400 pr-1'>
        //             <span className='font-DanaDemiBold text-base md:text-xl '>
        //                 154000
        //             </span>
        //             <span className='text-xs md:text-sm tracking-tighter'>
        //                 تومان
        //             </span>
        //         </div>
        //         <div className='offer'>
        //             <span className='text-xs md:text-xl'>144000</span>
        //             <span className='hidden md:inline text-sm tracking-tighter'>تومان</span>

        //         </div>
        //     </div>
        // </div>
    )
}